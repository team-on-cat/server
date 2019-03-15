const router = require('express').Router()
const images = require('../middlewares/images');
const UploadController = require('../controllers/uploadController')

router.post('/',
  images.multer.single('image'),
  images.sendUploadToGCS,
  UploadController.create
)
router.get('/:id', UploadController.read)

module.exports = router;