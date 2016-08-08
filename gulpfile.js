var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var watch = require('gulp-watch');

//serve it
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Concatenate js
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

// Templates
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('source/pages/**/*.+(html|njk)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['source/templates']
    }))
  .pipe(gulp.dest('dest'))
});

// Check if `scripts` task is complete before browserReload
gulp.task('js-watch', ['scripts'], function (done) {
    gulp.watch('./source/scripts/**/*.js', ['scripts']);
    browserSync.reload();
    done();
});
// Check if `styles` task is complete before browserReload
gulp.task('css-watch', ['styles'], function (done) {
    gulp.watch('./source/stylus/**/*.styl', ['styles']);
    browserSync.reload();
    done();
});
// use default task to launch Browsersync and watch scripts and styles
gulp.task('serve', ['scripts', 'styles'], function () {

    browserSync.init({
        server: {
            baseDir: "./dest"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("./source/scripts/**/*.js", ['js-watch']);
    gulp.watch("./source/stylus/**/*.styl", ['css-watch']);
});

gulp.task('default', ['scripts', 'styles', 'nunjucks']);

/*
gulp.task('default', function() {
  // place code for your default task here
});
*/
