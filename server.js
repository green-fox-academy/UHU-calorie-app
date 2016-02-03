'use strict';

var express = require('express');
var meals = require('./meals.js');
var app = express();
var defaultPort = 3000;

app.use(express.static('public'));
app.listen(process.env.PORT || defaultPort);

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
    if (err) {
      res.json(result);
    } else {
      res.json({status: 'ok'});
    }
  });
});
