'use strict';

var express = require('express');
/* jshint ignore:start */
var mysql = require('./connection.js');
/* jshint ignore:end */
var app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Hello');
});

app.get('/hello', function(req, res) {
  res.send('Hello World');
});
