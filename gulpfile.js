var
    gulp    = require('gulp')
    // Concatenate files
  , concat  = require('gulp-concat')
    // JS Uglify (minifier)
  , uglify  = require('gulp-uglify')
    // Rename files
  , rename  = require('gulp-rename')
    // Notifications
  , notify  = require('gulp-notify')
;

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
        .pipe(notify('GND Lib v1 done.'))
    ;
});

// Concatenate & Minify JS for V2
gulp.task( 'scriptsv2', function ()
{
    return gulp.src([
            'v2/gnd.js',
            'v2/is.js',
            'v2/Logger.js',
            'v2/Utils.js',
            'v2/Array.js',
            'v2/Object.js',
            'v2/String.js',
            'v2/Ajax.js',
            'v2/Auth.js',
            'v2/Cookies.js',
            'v2/Dom.js',
            'v2/Router.js',
            'v2/Template.js',
            'v2/UserAgent.js'
        ])
        .pipe(concat('gnd.v2.js'))
        .pipe(gulp.dest('../'))
        .pipe(gulp.dest('.'))
        .pipe(rename('gnd.v2.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../'))
        .pipe(gulp.dest('.'))
        .pipe(notify('GND Lib v2 done.'))
    ;
});

// Watch Files For Changes
gulp.task( 'watch', function ()
{
    gulp.watch( 'src/*.js', ['scripts'] );
    gulp.watch( 'v2/*.js', ['scriptsv2'] );
});

// Default Task
gulp.task( 'default', ['scripts','scriptsv2'] );