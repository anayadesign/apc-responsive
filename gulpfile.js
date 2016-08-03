var gulp = require('gulp');
//var watch = require('gulp-watch');
//gulp-watch might watch for new files created
var stylus = require('gulp-stylus');


// Get one .styl file and render
gulp.task('styles', function () {
  return gulp.src('./page/styles/stylus/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./page/styles/css'));
});

gulp.task('watch:styles', function(){
  gulp.watch('./page/styles/stylus/**/*.styl', ['styles']);
  console.log('watching');
});

gulp.task('default', ['watch:styles']);

/*
gulp.task('default', function() {
  // place code for your default task here
});
*/
