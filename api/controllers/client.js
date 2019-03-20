'use strict';

const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');

exports.menu = function(req, res) {
  const rId = req.params.restaurantId;
  const tId = req.params.tableId;
  console.log(rId, tId);

  Restaurant.findOne({id: rId}, function(err, r) {
    console.log(err, r);
    if (r == null) {
      res.status(404).send('Sorry, we cannot find that!'); // TODO
      return;
    };

    const mId = r.menu_id;
    console.log(mId);
    Menu.findOne({id: mId}, function(err, menu) {
      if (r == null) {
        res.status(404).send('Sorry, we cannot find that!'); // TODO
        return;
      };

      res.json(menu);
    });
  });
};

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
