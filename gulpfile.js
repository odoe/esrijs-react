var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react', function () {
  return gulp.src(['src/*.js', 'src/**/*.js', 'src/**/**/*.js'])
  .pipe(react())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch(['src/*.js', 'src/**/*.js', 'src/**/**/*.js'], ['react']);
});

gulp.task('default', ['react']);
