var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Concatenate & Minify JS
gulp.task( 'scripts', function ()
{
    return gulp.src([
            'src/gnd.js',
            'src/gnd_array.js',
            'src/gnd_object.js',
            'src/gnd_string.js',
            'src/gnd_cookies.js',
            'src/gnd_userAgent.js',
            'src/gnd_is.js',
            'src/gnd_log.js',
            'src/gnd_utils.js',
            'src/gnd_xhr.js',
            'src/gnd_$.js',
            'src/gnd_dom.js',
            'src/gnd_scroller.js',
            'src/gnd_ui.js',
            'src/gnd_ui_model.js',
            'src/gnd_ui_collection.js',
            'src/gnd_ui_view.js'
        ])
        .pipe(concat('gnd.js'))
        .pipe(gulp.dest('../'))
        .pipe(gulp.dest('.'))
        .pipe(rename('gnd.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../'))
        .pipe(gulp.dest('.'))
    ;
});

// Watch Files For Changes
gulp.task( 'watch', function ()
{
    gulp.watch( 'src/*.js', ['scripts'] );
});

// Default Task
gulp.task( 'default', ['scripts'] );