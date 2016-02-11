'use strict';

var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var ava = require('gulp-ava');
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
    return gulp.src('./*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['jshint']);
  gulp.watch('./*.js', ['test']);
  gulp.watch('./*.scss', ['sass']);
});

gulp.task('ci', ['test', 'jshint', 'sass']);

gulp.task('default', ['watch']);
