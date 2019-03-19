'use strict';
module.exports = function(app) {
  var image = require('../controllers/image');

  app.route('/image/:imageId')
    .get(image.read_image);
};