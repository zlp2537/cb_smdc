'use strict';

const mongoose = require('mongoose');  
const imageSchema = new mongoose.Schema({  
  id: String,
  data: Buffer
});
mongoose.model('Image', imageSchema);

module.exports = mongoose.model('Image');
