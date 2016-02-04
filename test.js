
'use strict';

import test from 'ava';
import meals from './meals';

test(t => {
  t.is(typeof meals.list, 'function');
  t.is(typeof meals.del, 'function');
  t.is(typeof meals.add, 'function');
});


test.cb(t => {
  t.is(meals.del(131, function(err, res) {
    t.is(res.affectedRows, 0);
    t.end();
  }));
});

test.cb(t => {
  t.is(meals.list(function(err, res) {
  t.is(Array.isArray(res), true);
  t.end();
  }));
});

test.cb(t => {
  meals.add({meal_name: 'gec', calories: 55, date: 1998-12-12}, function(err, res) {
  console.log(res);
  t.is(typeof(res), 'object');
  t.end();
  });
});

test.cb(t => {
  meals.add({meal_name: 'pics', calories: 60}, function(err, res) {
    t.same([res.affectedRows], [1]);
    t.end();
  });
});

test.cb(t => {
  var connection = {};
  t.is(connection.query = function(query, cb) {
    cb(null, [{}]);
  });

  var meal = new Meal(connection);
  t.is(meal.getAll(function(query, cb) {
    t.ok(meals.length > 0);
    t.end();
  }));
});

test.cb(t => {
  t.is('query string', function(t) {
    var connection = {};
  t.is(connection.query = function(query, cb) {
    t.equal(query, 'SELECT * FROM meal');
    t.end();
    });
  });
  var meal = new Meal(connection);
  meal.getAll();
});
