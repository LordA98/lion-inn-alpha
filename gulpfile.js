'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// Sass Task
// Compile Sass files into CSS
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets'));
});


// Concat all css files into one - styles.min.css
// Places CSS file in root folder
gulp.task('css', function () {
  return gulp.src('stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concatCss("style.min.css"))
    .pipe(gulp.dest('./'));
});


// Watch for changes in .scss files
// When changes are saved - compile Sass file into CSS
// and then concatenate all CSS files into styles.min.css
gulp.task('watch', function(){
    gulp.watch('sass/*.scss', gulp.series('sass'));
    gulp.watch('stylesheets/*.css', gulp.series('css'));
});
