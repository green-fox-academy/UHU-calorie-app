'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch');
import test from 'ava';

test(t => {
      t.same([1, 2], [1, 2]);
});

var cucc = 0;