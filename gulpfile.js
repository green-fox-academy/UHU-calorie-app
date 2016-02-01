'use strict';

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
var jshint = require('gulp-jshint');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!');
});

gulp.src(['*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'));