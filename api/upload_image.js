const fs = require('fs');
const Buffer = require('buffer').Buffer;
const constants = require('constants');
const mongoose = require('mongoose');
const Image = require('./models/image');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://39.96.68.144:27017/smdc_dev',
  {useNewUrlParser: true});

const imageId = process.argv[2];
const filename = process.argv[3];
console.log(imageId, filename);

fs.open(filename, 'r', function(err, fd) {
  if (err) {
    throw err;
  }
  const buffer = Buffer.alloc(65535); // TODO
  const num = fs.readSync(fd, buffer, 0, 65535, null);
  console.log('bytes read', num);

  const img = new Image;
  img.id = imageId;
  img.data = buffer;
  img.save(function (err) {
    mongoose.connection.close();
    if (err) {
      throw err;
    }
    console.log("saved!")
  });
});