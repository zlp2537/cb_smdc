var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// importing routes
var clientRoutes = require('./routes/client');
var adminRoutes = require('./routes/admin');

// register routes
clientRoutes(app);
adminRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);