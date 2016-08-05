var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
//var watch = require('gulp-watch');
//gulp-watch might watch for new files created
var stylus = require('gulp-stylus');

// Scripts and stuff
gulp.task('scripts', function() {
  return gulp.src('./source/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dest/scripts'));
});

// Get one .styl file and render
gulp.task('styles', function () {
  return gulp.src('./source/stylus/index.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('watch:styles', function(){
  gulp.watch('./source/stylus/**/*.styl', ['styles']);
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('source/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['source/templates']
    }))
  // output files in source folder
  .pipe(gulp.dest('dest'))
});

gulp.task('default', ['scripts', 'styles', 'nunjucks']);

/*
gulp.task('default', function() {
  // place code for your default task here
});
*/
