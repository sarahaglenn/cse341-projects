const mongodb = require('../database/connect');
const { ObjectId } = require('mongodb');

const getData = async (req, res, next) => {
    const result = await mongodb.getDatabase().db("CSE330").collection('Contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
    });
};

const findContact = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    try {
        const result = await mongodb.getDatabase().db("CSE330").collection("Contacts").find({ _id: contactId });
        if (result) {
            result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
            });
        } else {
            res.status(404).json({ error: "No contact exists with that id" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error retrieving contacts."})
    }
};

module.exports = {
    getData,
    findContact,
};
