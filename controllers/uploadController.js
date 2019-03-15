const Upload = require('../models/upload')

class UploadController {
  static create (req, res) {
    Upload
      .create({
        businessCardUrl: req.file.cloudStoragePublicUrl
      })
      .then(upload => {
        res.status(201).json(upload);
      })
      .catch(error => {
        res.status(500).json({
          message: 'Internal Server Error'
        })
      })
  }

  static read (req, res) {
    Upload
      .findById(req.params.id)
      .then(upload => {
        res.status(201).json(upload);
      })
      .catch(error => {
        res.status(500).json({
          message: 'Internal Server Error'
        })
      })
  }
}

module.exports = UploadController;