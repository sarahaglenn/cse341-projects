const express = require('express');
const bodyParser = require('body-parser');
const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/professional', professionalRoutes);


app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});