'use strict';
module.exports = function(app) {
  var admin = require('../controllers/admin');

  app.route('/api/admin/restaurants/:id')
    .get(admin.read_restaurant)
    .put(admin.update_restaurant)
    .delete(admin.delete_restaurant);

  app.route('/api/admin/restaurant/:restaurantId/tables/:id')
    .get(admin.read_tables)
    .put(admin.update_table)
    .delete(admin.delete_table);

  app.route('/api/admin/restaurant/:restaurantId/menu')
    .get(admin.read_menu)
    .put(admin.update_menu);
};