'use strict';

const mongoose = require('mongoose');  
const ImageSchema = new mongoose.Schema({  
  id: String,
  data: Buffer
});
mongoose.model('Image', ImageSchema);

module.exports = mongoose.model('Image');
