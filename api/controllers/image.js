'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://39.96.68.144:27017/smdc_dev', {useNewUrlParser: true});

const Image = mongoose.model('Image', { id: String, data: Buffer });

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
