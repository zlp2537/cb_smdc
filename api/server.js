const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://39.96.68.144:27017/smdc_dev',
  {useNewUrlParser: true});

// importing routes
const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');
const imageRoutes = require('./routes/image');

// register routes
clientRoutes(app);
adminRoutes(app);
imageRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);