'use strict';

import test from 'ava';
import items from './items';

test(t => {
  t.is(typeof items.list, 'function');
  t.is(typeof items.del, 'function');
  t.is(typeof items.add, 'function');
});
