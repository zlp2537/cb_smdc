'use strict';

const mongoose = require('mongoose');  
const restaurantSchema = new mongoose.Schema({  
  id: String,
  name: String,
  pic_id: String,
  menu_id: String
});

mongoose.model('Restaurant', restaurantSchema);

module.exports = mongoose.model('Restaurant');
