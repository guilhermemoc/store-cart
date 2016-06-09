var gulp = require('gulp'), 
	sass = require('gulp-ruby-sass'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require ('gulp-autoprefixer');



// COMPÌLER

gulp.task('sass', function(){
	return sass('css/sass/*.sass')
	.pipe(gulp.dest('css/'));
});

// WATCHER

gulp.task('watch', function() {
	gulp.watch('css/sass/**/*.sass', ['sass']);
});


//MINIFIER

gulp.task('minify-css', function() {
	return gulp.src('styles/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('css'))
});

// AUTOPREFIXER 

gulp.task('autoprefix', function () {
	return gulp.src('css/main.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('css'));
});




gulp.task('default', ['sass', 'watch', 'autoprefix']);
