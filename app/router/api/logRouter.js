const router = require('express').Router();
const LogController = require('../../controllers/LogController');

router.get('/:image_id', (req, res) => LogController.getImageLogs(req, res));

module.exports = router;