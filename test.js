'use strict';

import test from 'ava';
// import items from './items';
test(t => {
    t.same([1, 2], [1, 2]);
});

// test(t => {
//   t.is(typeof items.list, 'function');
//   t.is(typeof items.del, 'function');
//   t.is(typeof items.add, 'function');
// });


// test.cb(t => {
//   t.is(items.del(131, function(err, res) {
//     t.is(res.affectedRows, 0);
//     t.end();
//   }));
// });
