const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/', require('./routes'));

mongodb.initDatabase((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, '0.0.0.0');
        console.log(`Connected to database and listening at port ${port}`);
    }
});