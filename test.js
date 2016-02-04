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
