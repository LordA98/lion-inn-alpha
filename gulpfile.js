'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var print = require('gulp-print').default;
var dateTime = require('get-date');
var del = require('del');

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


// Concatenate all JavaScript files from 'scripts' folder into one - script.js
// Places result into root folder
gulp.task('js', function() {
    return gulp.src('scripts/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./'));
});


// 'gulp watch'
// Watch for changes in .scss files
// When changes are saved - compile Sass file into CSS
// and then concatenate all CSS files into styles.min.css
gulp.task('watch', function() {
    gulp.watch('sass/*.scss', gulp.series('sass'));
    gulp.watch('stylesheets/*.css', gulp.series('css'));
    gulp.watch('scripts/*.js', gulp.series('js'));
});


// 'gulp test'
// Adds all files needed for deployment into the prod folder
// Has to be called manually - not included in 'watch'
gulp.task('test', function() {
    gulp.src(['./index.html', './style.min.css', './script.js', './favicon.ico'])
        .pipe(gulp.dest('./test/'));
    gulp.src('./html/**/*')
        .pipe(gulp.dest('./test/html/'));
    gulp.src('./images/**/*')
        .pipe(gulp.dest('./test/images/'));
    gulp.src('./fonts/**/*')
        .pipe(gulp.dest('./test/fonts/'));
    return gulp.src('package.json')
        .pipe(print(function() {return "Task Complete.  Files added to 'test' directory."}));
});

// Dependency for gulp prod
// Backs-up files currently in prod folder
gulp.task('backup', function() {
    return gulp.src('./prod/**/*')
        .pipe(gulp.dest('./backups/' + dateTime().split('/').join('') + '/'));
});

// Dependency for gulp prod
// Deletes all current files in prod
gulp.task('del-old', function() {
    return del([
        './prod/**/*'
    ]);
});

// 'gulp prod'
// Adds all files needed for deployment into the prod folder
// Has to be called manually - not included in 'watch'
gulp.task('prod', gulp.series('backup', 'del-old', function() {

    // Create new 'prod' folder
    // from root
    gulp.src(['./index.html', './style.min.css', './script.js', './favicon.ico'])
        .pipe(gulp.dest('./prod/'));
    // from html folder
    gulp.src('./html/**/*')
        .pipe(gulp.dest('./prod/html/'));
    // from images folder
    gulp.src('./images/**/*')
        .pipe(gulp.dest('./prod/images/'));
    // from fonts folder
    gulp.src('./fonts/**/*')
        .pipe(gulp.dest('./prod/fonts/'));

    // Return success message
    return gulp.src('package.json')
        .pipe(print(function() {return "Task Complete.  Files added to 'prod' directory."}));
}));
