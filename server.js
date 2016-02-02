'use strict';

var express = require('express');
// var mysql = require('./connection.js');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'be2be2ab917e7e',
  password: '95dd4052',
  database: 'heroku_e0c3a986f86f1ae',
  timezone: 'utc'
});

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {
	connection.query('SELECT * FROM meal', function(err, result) {
		if (err) throw err;
		res.send('Hello');
	});
});

app.get('/hello', function(req, res) {
  res.send('Hello World');
});
