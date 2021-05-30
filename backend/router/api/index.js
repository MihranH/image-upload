

const router = require('express').Router();

router.use('/image', require('./imageRouter'));

module.exports = router;
