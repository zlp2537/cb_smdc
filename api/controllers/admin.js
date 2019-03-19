'use strict';

// var mongoose = require('mongoose'),
//   Task = mongoose.model('Tasks');

exports.menu = function(req, res) {
  //console.log("hhaha");
  //console.log(req.params.restaurantId);
  //console.log(req.params.tableId);
  // Task.find({}, function(err, task) {
  //   if (err)
  //     res.send(err);
  //   res.json(task);
  // });
  res.json({restaurantId: req.params.restaurantId, tableId: req.params.tableId});
};
