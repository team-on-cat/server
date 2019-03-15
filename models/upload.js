const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  businessCardUrl: String
})

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload