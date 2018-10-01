'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

// Sass Task
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets'));
});

// Watch for changes in .scss files
gulp.task('sass:watch', function(){
    gulp.watch('sass/*.scss', gulp.series('sass'));
});

// Concat all css files into one - styles.css
// gulp.task('css', function () {
//   return gulp.src('stylesheets/*.css')
//     .pipe(concatCss("stylesheets/style.css"))
//     .pipe(gulp.dest('stylesheets/'));
// });
