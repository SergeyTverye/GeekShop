var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require( 'gulp-pug' );
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var gcmq = require('gulp-group-css-media-queries');


var config = {
	src: './src',
	css: {
		src: '/sass/*.scss',
		dest: '/css',
	},
	pug: '/pug/*.pug',
	any: '/*.*'
};

gulp.task('sass', function() {
	 gulp.src(config.src + config.css.src)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(gcmq())
    .pipe(autoprefixer({
                browsers: ['> 0.1%'],
                cascade: false
            }))
    .pipe(cleanCSS({
                level: 2
            }))
    .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(config.src + config.css.dest))
	.pipe(browserSync.reload({stream: true})) 
});

gulp.task( 'pug', function () {
   gulp.src(config.src + config.pug)
  .pipe(pug()).on('error', gutil.log)
  .pipe(gulp.dest(config.src))
  .pipe(browserSync.reload({stream: true})) 
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.src + config.css.src, ['sass']);
    gulp.watch('./src/pug/**/*.pug', ['pug']);
	gulp.watch(config.src + config.pug, ['pug']);
	gulp.watch(config.src + config.css.dest, browserSync.reload);
	gulp.watch(config.src + config.any, browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});


gulp.task('default', function() {
  return gutil.log(config.src)
});