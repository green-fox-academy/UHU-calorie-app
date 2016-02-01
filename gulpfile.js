'use strict';

var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var ava = require('gulp-ava');


gulp.task('jshint', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['jshint']);
});

gulp.task('default', () => {
	return gulp.src('test.js')
		// gulp-ava needs filepaths so you can't have any plugins before it 
		.pipe(ava());
});
gulp.task('default', ['watch']);
