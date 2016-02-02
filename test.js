'use strict';

import test from 'ava';
import items from './items';

var mysql = require('./connection.js');

test(t => {
  t.is(typeof items.list, 'function');
  t.is(typeof items.del, 'function');
  t.is(typeof items.add, 'function');
});

test(t => {
  t.same(deleteMeals())
});
