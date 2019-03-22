'use strict';

const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  id: String,
  items: [{
    id: Number,
    count: Number,
    remarks: String,
  }]
});
mongoose.model('Order', orderSchema);

module.exports = mongoose.model('Order');