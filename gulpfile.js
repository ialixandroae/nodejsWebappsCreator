'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init(null, {
        files: ["./src/**/*.*"],
        browser: "google chrome",
        port: 3000,
    });
});
gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: './src/index.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});