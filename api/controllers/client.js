'use strict';

const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');

exports.menu = function(req, res) {
  const rId = req.params.restaurantId;
  const tId = req.params.tableId;
  //console.log(rId, tId);
  loadMenu(rId, function(err, menu) {
    if (err || menu == null) {
      res.status(404).send('Sorry, we cannot find that!'); // TODO
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      res.json(menu);
    }
  });
};

function loadMenu(restaurantId, cb) {
  Restaurant.findOne({id: restaurantId}, function(err, r) {
    if (err || r == null) {
      return cb(err, r);
    }
    Menu.findOne({id: r.menu_id}, function(err, menu) {
      cb(err, menu);
    });
  });
}

// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.delete_a_task = function(req, res) {


//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };
