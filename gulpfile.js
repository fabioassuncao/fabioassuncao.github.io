const gulp = require('gulp');
const cssmin = require("gulp-cssmin");
const concat = require("gulp-concat");
const stripCssComments = require('gulp-strip-css-comments');

const paths = {
    css: [
        'src/assets/css/style.css'
    ],
    img: [
        'src/assets/img/**/*'
    ],
    html: [
    	'src/index.html',
        'src/404.html'
    ]
};

gulp.task('css', function(){
    gulp.src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('img', function(){
    gulp.src(paths.img)
    //.pipe(imagemin())
    .pipe(gulp.dest('./assets/img'));
});

gulp.task('html', function(){
    gulp.src(paths.html)
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['css', 'img', 'html']);