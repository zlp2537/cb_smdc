'use strict';

const mongoose = require('mongoose');  
const menuSchema = new mongoose.Schema({  
  id: String
});
mongoose.model('Menu', menuSchema);

module.exports = mongoose.model('Menu');