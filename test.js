'use strict';

import test from 'ava';
import Meal from './meals';
import main from './main.js';
import supertest from 'supertest';

test('return connection', t => {
  var connection = {};
  connection.query = function(query) {
    t.same(query, 'SELECT * FROM meal;');
  };
  var meal = new Meal(connection);
  meal.list();
});

test('add connection', t => {
  var connection = {};
  connection.query = function(query) {
    t.same(query, 'INSERT INTO meal SET ?;');
  };
  var meal = new Meal(connection);
  meal.add();
});

test('del connection', t => {
  var connection = {};
  connection.query = function(query) {
    t.same(query, 'DELETE FROM meal WHERE meal_id = ?;');
  };
  var meal = new Meal(connection);
  meal.del();
});

test('list item', t => {
  var connection = {};
  connection.query = function(query, cb) {
    cb(null, [{}]);
  };
  var meal = new Meal(connection);
  meal.list(function(err, meals) {
    t.ok(meals.length > 0);
  });
});

test.cb('server app get', t => {
  var connection = {};
  connection.query = function(query,cb){
    cb(null, [{}]);
  };
  var app = main.serverFunction(connection);
  supertest(app)
  .get('/meals')
  .expect(200)
  .end(function(err, res) {
    if (err) {
      t.fail(err);
    }
    console.log(res.body);
  t.end();
  });
});
