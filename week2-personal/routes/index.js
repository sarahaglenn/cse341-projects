const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Contacts API! -Sarah Glenn');
});
router.use('/contacts', require('./contacts'));
router.use('/api-docs', require('./swagger'));

module.exports = router;
