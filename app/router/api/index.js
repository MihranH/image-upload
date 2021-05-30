

const router = require('express').Router();

router.use('/images', require('./imageRouter'));
router.use('/logs', require('./logRouter'));

module.exports = router;
