'use strict';

var express = require('express');
var meals = require('./meals.js');
var app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Hello');
});

app.get('/meals', function(req, res) {
  meals.list(function(result){
    res.json(result);
  });
});

/*app.delete('/meals/:id', function (req, res){
  meals.del(req.params.id, function(err, res) {
    if (err) {
      res.json({status: 'not exists'});
    } else {
      res.json({status: 'ok'});
    }
  });
});

app.post('/meals', function (req, res) {
  meals.add(req.body, function(err, res) {
     if (err) {
      res.json({status: 'not exists'});
    } else {
      res.json({status: 'ok'});
    }
  });
});*/
