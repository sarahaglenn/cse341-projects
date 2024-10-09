const router = require('express').Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getData);

router.get('/:id', contactsController.findContact);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
