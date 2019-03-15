const router = require('express').Router()
const images = require('../middlewares/images');
const UploadController = require('../controllers/uploadController')

app.post('/',
  images.multer.single('image'),
  images.sendUploadToGCS,
  UploadController.create
)

module.exports = router;