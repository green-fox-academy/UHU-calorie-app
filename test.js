
'use strict';

import test from 'ava';
import Meal from './meals';
import mysql from 'mysql';

var localConfig = {
  host: 'localhost',
  user: 'root',
  password: 'mysql44',
  database: 'meal',
  timezone: 'utc'
};

var localConnection = mysql.createConnection(localConfig);

test(t => {
  var meals = new Meal(localConnection);
  t.is(typeof meals.list, 'function');
  t.is(typeof meals.del, 'function');
  t.is(typeof meals.add, 'function');
});

test.cb(t => {
  var meals = new Meal(localConnection);
  t.is(meals.del(131, function(err, res) {
    t.is(res.affectedRows, 0);
    t.end();
  }));
});

test.cb(t => {
  var meals = new Meal(localConnection);
  t.is(meals.list(function(err, res) {
  t.is(Array.isArray(res), true);
  t.end();
  }));
});
/* jshint ignore:start */
test.cb(t => {
  var meals = new Meal(localConnection);
  meals.add({meal_name: 'gec', calories: 55, date: 1998-12-12}, function(err, res) {
  t.is(typeof(res), 'object');
  t.end();
  });
});

test.cb(t => {
  var meals = new Meal(localConnection);
  meals.add({meal_name: 'pics', calories: 60}, function(err, res) {
    t.same([res.affectedRows], [1]);
    t.end();
  });
});
/* jshint ignore:end */
test.cb(t => {
  var connection = {};
  connection.query = function(query, cb) {
    cb(null, [{}]);
  };

  var meal = new Meal(connection);
  meal.list(function(err, meals) {
    t.ok(meals.length > 0);
    t.end();
  });
});

test.cb(t => {
  var connection = {};
  connection.query = function(query) {
    t.is(query, 'SELECT * FROM meal;');
    t.end();
  };
  var meals = new Meal(connection);
  meals.list();
});
