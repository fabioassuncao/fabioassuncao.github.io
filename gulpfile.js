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
    	'src/index.html'
    ]
};

gulp.task('css', function(){
    gulp.src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('img', function(){
    gulp.src(paths.img)
    //.pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('html', function(){
    gulp.src(paths.html)
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['css', 'img', 'html']);