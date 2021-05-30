const router = require('express').Router();
const ImageController = require('../../controllers/ImageController');

router.get('/all/', (req, res) => ImageController.getAllImages(req, res));

module.exports = router;