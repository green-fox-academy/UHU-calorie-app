'use strict';

var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var watch = require('gulp-watch');

gulp.task('lint', function() {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

gulp.task('default', function () {
    return gulp.src('./*.js')
        .pipe(watch('./*.js'))
        .pipe(gulp.dest('build'));
});
