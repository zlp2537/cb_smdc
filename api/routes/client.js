'use strict';
module.exports = function(app) {
  var client = require('../controllers/client');

  // client Routes
  app.route('/api/client/menu/:restaurantId/:tableId')
    .get(client.menu);


  // app.route('/tasks/:taskId')
  //   .get(client.read_a_task)
  //   .put(client.update_a_task)
  //   .delete(client.delete_a_task);
};