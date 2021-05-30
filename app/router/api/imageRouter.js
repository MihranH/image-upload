const router = require('express').Router();
const ImageController = require('../../controllers/ImageController');

router.get('/', (req, res) => ImageController.getAllImages(req, res));
router.post('/upload-image/', (req, res) => ImageController.uploadImgToS3(req, res));
router.post('/add/', (req, res) => ImageController.addImage(req, res));
router.delete('/:id', (req, res) => ImageController.deleteImage(req, res));

module.exports = router;