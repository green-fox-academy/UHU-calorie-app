'use strict';

var express = require('express');
var mysql = require('./connection.js');
var app = express();

mysql.conn.connect();

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get('/hello', function(res,req) {
  res.send('Hello World');
});
