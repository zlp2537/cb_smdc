var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// importing routes
var clientRoutes = require('./routes/client');
var adminRoutes = require('./routes/admin');
var imageRoutes = require('./routes/image');

// register routes
clientRoutes(app);
adminRoutes(app);
imageRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);