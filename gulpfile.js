var gulp        = require('gulp'),
    connect     = require('gulp-connect')
    gulpif      = require('gulp-if'),
    ngAnnotate  = require('gulp-ng-annotate'),
    print       = require('gulp-print'),
    uglify      = require('gulp-uglify'),
    useref      = require('gulp-useref')
;

gulp.task('connect', function () {
  connect.server({
    root: 'www'
  });
});

gulp.task('default', ['connect']);

gulp.task('userefs', function () {

  var assets = useref.assets();
  
  return gulp.src('www/index.html')
    .pipe( assets )
    .pipe( gulpif( '**/scripts/app-combined.js', ngAnnotate({ single_quotes: true }) ) )
    .pipe( gulpif( '**/scripts/app-combined.js', uglify() ) )
    .pipe( assets.restore() )
    .pipe( useref() )
    .pipe( gulp.dest('dist') )
  ;

});


gulp.task('passthrough', function () {

  return gulp.src([
      'www/**',
      '!www/index.html',
      '!www/bower_components',
      '!www/bower_components/**',
      '!www/**/*.js',
      '!www/**/*.css'
    ])
    .pipe( gulp.dest('dist') )
  ;
});


gulp.task('dist', ['userefs', 'passthrough']);


gulp.task('connectDist', function () {
  connect.server({
    root: 'dist'
  });
});


