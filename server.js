'use strict';

var express = require('express');
// var mysql = require('./connection.js');
var items = require('./items.js');
var app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Hello');
});

app.get('/hello', function(req, res) {
  res.send('Hello World');
});

app.get('/meals', function(req, res) {
  items.list(function(result){
    res.json(result);
  });
});

app.delete('/meals/:id', function (req, res){
  items.del(req.params.id, function(id) {
    res.json(id);
  });
});

app.post('/meals', function (req, res){
  items.add(req.body, function(item) {
    res.json(item);
  });
});
