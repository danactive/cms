var gulp = require('gulp'),
	dust = require('gulp-dust');
 
gulp.task('build', function () {
    return gulp.src('src/views/*.dust')
        .pipe(dust())
        .pipe(gulp.dest('public/js'));
});