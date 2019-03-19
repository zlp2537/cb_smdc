'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://39.96.68.144:27017/smdc_dev', {useNewUrlParser: true});

const Image = mongoose.model('Image', { id: String, data: Buffer });

exports.read_image = function(req, res) {
  Image.find({id: "sxty_cszj01.png"}, function(err, img) {
    //console.log(img[0].data);
    res.set('Content-Type', 'image/png');
    res.send(img[0].data);
  });
};