class UploadController {
  static create (req, res, next) {
    console.log(req.file.cloudStoragePublicUrl);
  }
}

module.exports = UploadController;