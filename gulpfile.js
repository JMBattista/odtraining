var gulp    = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    port: '3000'
  });
});

gulp.task('default', ['connect']);
