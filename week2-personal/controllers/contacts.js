const mongodb = require('../database/connect');
const { ObjectId } = require('mongodb');

const getData = async (req, res) => {
  const result = await mongodb.getDatabase().db('CSE330').collection('Contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const findContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  try {
    const result = await mongodb
      .getDatabase()
      .db('CSE330')
      .collection('Contacts')
      .findOne({ _id: contactId });
    if (result) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No contact exists with that id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving contacts.', details: error.message });
  }
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  try {
    const response = await mongodb
      .getDatabase()
      .db('CSE330')
      .collection('Contacts')
      .insertOne(contact);
    if (response.acknowledged) {
      res.setHeader('Content-Type', 'application/json');
      res
        .status(201)
        .json({ message: 'Contact successfully added.', contactId: response.insertedId });
    } else {
      res.status(500).json({ error: 'Contact could not be added.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error adding contact.', details: error.message });
  }
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  let updates = {};
  if (req.body.firstName) updates.firstName = req.body.firstName;
  if (req.body.lastName) updates.lastName = req.body.lastName;
  if (req.body.email) updates.email = req.body.email;
  if (req.body.favoriteColor) updates.favoriteColor = req.body.favoriteColor;
  if (req.body.birthday) updates.birthday = req.body.birthday;

  try {
    const response = await mongodb
      .getDatabase()
      .db('CSE330')
      .collection('Contacts')
      .updateOne({ _id: contactId }, { $set: updates });
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Contact not found or nothing was updated.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating contact.', details: error.message });
  }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  try {
    const response = await mongodb
      .getDatabase()
      .db('CSE330')
      .collection('Contacts')
      .deleteOne({ _id: contactId });
    if (response.deletedCount > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ message: 'Contact deleted', contactId: contactId });
    } else {
      res.status(404).json({ error: 'Contact not found or could not be deleted.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting contact', details: error.message });
  }
};

module.exports = {
  getData,
  findContact,
  createContact,
  updateContact,
  deleteContact
};
