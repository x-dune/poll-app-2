const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: [elem=> elem.length <= 256, `{PATH} exceeded 256 characters`]
    },
    vote: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        _id: false
    });

const pollSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        text: true,
        validate: [elem=> elem.length <= 512, `{PATH} exceeded 512 characters`]
    },
    options: {
        type: [optionSchema],
        required: true,
        validate: [elem => elem.length >= 2 && elem.length <= 32, '{PATH} must be between 2 and 32']
    },
    createdOn: {
        type: Date,
        default: new Date(),
        required: true
    },
    lastVotedOn: {
        type: Date,
        default: null
    }
});

pollSchema.path('title').index({text: true});

const Poll = module.exports = mongoose.model('Poll', pollSchema);