'use strict';

const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
  id: String,
  groups: [{
    id: Number,
    name: String
  }],
  items: [{
    group_id: Number,
    name: String,
    pic_id: String,
    price: Number // in cents
  }]
});
mongoose.model('Menu', menuSchema);

module.exports = mongoose.model('Menu');