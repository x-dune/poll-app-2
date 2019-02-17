if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;

db.once('open', () => {
    console.log('>>> Connected to MongoDB');
});

db.on('error', err => {
    console.error('!!! MongoDB Connection Error');
});

const Poll = require('../models/poll');

router.route('/polls')
    .get((req, res) => {
        let sortObject;
        switch (req.query.sort) {
            case 'recently_created':
                sortObject = { createdOn: -1 };
                break;
            case 'recently_voted':
                sortObject = { lastVotedOn: -1 };
                break;
            case 'most_voted':
                sortObject = null;
                break;
            default:
                sortObject = { createdOn: -1 };
        }

        const searchObject = req.query.title ? { $text: { $search: req.query.title } } : {};
        const skipAmount = req.query.page > 1 ? (parseInt(req.query.page) - 1) * 10 : 0;

        const countQuery = Poll.find(searchObject).countDocuments();
        let findQuery;
        if (sortObject) {
            findQuery = Poll.find(searchObject)
                .select('-createdOn -lastVotedOn')
                .sort(sortObject)
                .skip(skipAmount).limit(10);
        } else {
            findQuery = Poll.aggregate([
                { $match: searchObject },
                { $unwind: "$options" },
                {
                    $group: {
                        _id: "$_id",
                        title: { $first: "$title" },
                        totalVote: {
                            $sum: "$options.vote"
                        },
                        options: {
                            $push: { name: "$options.name", vote: "$options.vote" }
                        }
                    }
                },
                { $sort: { totalVote: -1 } },
                {
                    $project: {
                        title: 1,
                        options: 1
                    }
                },
                { $skip: skipAmount },
                { $limit: 10 }
            ]
            );
        }
        countQuery.exec(false, (err, count) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                findQuery.exec((err, polls) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                    } else {
                        console.log(count, sortObject, req.query.sort);
                        res.json({ polls, count });
                    }
                });
            }
        });


    })
    .post((req, res) => {
        const newPoll = new Poll({
            title: req.body.title,
            options: req.body.options.map(option => { return { name: option } }),
            createdOn: new Date()
        });
        console.log('newPoll', newPoll);
        newPoll.save((err, poll) => {
            if (err) {
                console.error(err)
                res.status(500).send('Internal Server Error');
            }
            else {
                return res.redirect(301, `/poll/${poll.id}`);
            }
        })
    })

router.route('/polls/:id')
    .get((req, res) => {
        Poll.findById(req.params.id, (err, poll) => {
            if (err)
                res.status(404).send({});
            else
                res.json(poll);
        });
    })
    .put((req, res) => {
        Poll.findByIdAndUpdate(req.params.id, {
            $currentDate: { lastVotedOn: true },
            $inc: { [`options.${req.body.voteIndex}.vote`]: 1 }
        }, (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                console.log(data);
                res.status(200).end();
            }
        });
    });

module.exports = router;