'use strict';

const mongoose = require('mongoose');  
const MenuSchema = new mongoose.Schema({  
  id: String
});
mongoose.model('Menu', MenuSchema);

module.exports = mongoose.model('Menu');