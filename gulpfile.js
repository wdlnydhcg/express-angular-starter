var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');
var beautify = require('gulp-beautify');

gulp.task('movejs', function() {

    var jsFilter = gulpFilter(['angular.js', 'angular-ui-router.js']);
    var jsDest = './public/scripts/externe';

    return gulp.src(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(gulp.dest(jsDest));
});

gulp.task('movecss', function() {

    var cssDest = './public/css/externe'

    return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest(cssDest));
});

gulp.task('beautify-js', function() {
    return gulp.src(['**/*.js', '!./node_modules/**', '!./bower_components/**', '!./public/scripts/externe/**'], {
            base: './' // save the original path 
        })
        .pipe(beautify())
        .pipe(gulp.dest('./'));
});

gulp.task('move', function() {
    gulp.start('movejs', 'movecss');
});