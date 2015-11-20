// include Gulp
var gulp = require('gulp');

// include plug-ins
var sass = require('gulp-sass');


// SASS task
gulp.task('styles', function() {
    gulp.src('./sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./sass/*.scss',['styles']);
});