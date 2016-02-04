'use strict';

var express = require('express');
var Meal = require('./meals.js');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var defaultPort = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.listen(process.env.PORT || defaultPort);

var dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'mysql44',
  database: 'meal',
  timezone: 'utc'
};

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || dbConfig);

function handleDisconnection() {
 +  connection.connect(function(err) {
 +    if(err) {
 +      console.log('Error when connecting to database...', err);
 +      setTimeout(handleDisconnection, 2000);
 +    }
 +  });
 +
 +  connection.on('error', function(err) {
 +    console.log('database error...', err);
 +    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
 +      handleDisconnection();
 +    } else{
 +      throw err;
 +    }
 +  });
 +}

var meals = new Meal(connection);

app.get('/meals', function(req, res) {
  meals.list(function(err, result){
    if (err){
      res.json({status: 'not exists'});
    } else {
      res.json(result);
    }
  });
});

app.delete('/meals/:id', function (req, res){
  meals.del(req.params.id, function(err, result) {
    if (err) {
      res.json(result);
    } else {
      res.json({status: 'ok'});
    }
  });
});

app.post('/meals', function (req, res) {
  meals.add(req.body, function(err, result) {
    res.json({
      result: result
    });
  });
});

connection.connect();
handleDisconnection();
