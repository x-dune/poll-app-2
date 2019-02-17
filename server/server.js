const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
    .then(() => {
        // express code here
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/api', require('./routes/api'));

        app.get('/error', (req, res) => {
            nextApp.render(req, res, '/error', {})
        });

        app.get('/poll', (req, res) => {
            res.status(404);
            nextApp.render(req, res, '/error', {})
        });

        app.get('/poll/:id', (req, res) => {
            nextApp.render(req, res, '/poll', { id: req.params.id });
        })

        app.get('*', (req, res) => {
            return handle(req, res) // for all the react stuff
        });

        app.listen(PORT, err => {
            if (err) throw err;
            if (dev) {
                console.log(`> ready at http://localhost:${PORT}/`);
            }
            console.log(`> ready at ${PORT}`);
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    })