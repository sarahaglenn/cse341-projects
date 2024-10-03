const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Contacts API! -Sarah Glenn');
});
router.use('/contacts', require('./contacts'));

module.exports = router;
