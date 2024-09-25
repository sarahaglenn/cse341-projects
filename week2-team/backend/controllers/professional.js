const mongodb = require('../database/connect');

const getData = async (req, res, next) => {
    const result = await mongodb.getDatabase().db("CSE330").collection('professionals').find();
    //problem is at or after this point! The object being returned is not the right thing
    // look at mongo db tutorial and check format for pulling from the database
    console.log(result);
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {
    getData
};
