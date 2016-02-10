'use strict';

var bodyParser = require('body-parser');
var Meal = require('./meals.js');

function serverFunction(connect){
  var meals = new Meal(connect);
  var express = require('express');
  var app = express();
  app.use(bodyParser.json());
  app.use(express.static('public'));


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

  return app;
}

module.exports = {
  serverFunction: serverFunction
};
