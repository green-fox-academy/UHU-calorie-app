'use strict';

var gulp = require('gulp');
var ava = require('gulp-ava');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('jshint', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function() {
  gulp.src('test.js')
  .pipe(ava());
});

gulp.task('sass', function () {
    return gulp.src('./public/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['jshint']);
  gulp.watch('./*.js', ['test']);
  gulp.watch('./*.sass', ['sass']);
});

gulp.task('ci', ['test', 'jshint', 'sass']);

gulp.task('default', ['watch']);
