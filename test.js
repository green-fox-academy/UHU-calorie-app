'use strict';

import test from 'ava';
import items from './items';
/* jshint ignore:start */
var mysql = require('./connection.js');
/* jshint ignore:end */

test(t => {
  t.is(typeof items.list, 'function');
  t.is(typeof items.del, 'function');
  t.is(typeof items.add, 'function');
});
