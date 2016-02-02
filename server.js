'use strict';

var express = require('express');
var mysql = require('./connection.js');
var app = express();
var url = 'https://uhu-systems-calorie.herokuapp.com';

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get(url + '/hello', function(req, res) {
  res.send('Hello World');
});
