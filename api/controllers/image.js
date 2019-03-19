'use strict';

const Image = require('../models/image');

exports.read_image = function(req, res) {
  const imageId = req.params.imageId;
  console.log(imageId);
  Image.find({id: imageId}, function(err, img) {
    if (img.length > 0) {
      res.set('Content-Type', 'image/' + imageId.split('.').pop());
      res.send(img[0].data);
    } else {
      res.status(404).send('Sorry, we cannot find that!'); // TODO
    }
  });
};
