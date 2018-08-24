const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

gulp.task('css', function(){
  return gulp.src('assets/css/scss/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sourcemaps.write())
   .pipe(minifyCSS())
   .pipe(gulp.dest('assets/css'));
});

gulp.task('css:watch', function () {
  gulp.watch('assets/css/scss/*.scss', ['css']);
});

gulp.task('serve', ['css','css:watch'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});



gulp.task('default', ['serve']);
