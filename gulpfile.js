//
// npm install
// npm install gulp async gulp-connect gulp-livereload gulp-sourcemaps gulp-rename --save-dev
// npm install gulp-sass autoprefixer gulp-postcss gulp-clean-css --save-dev
// npm install gulp-uglify gulp-concat gulp-useref --save-dev
// npm install gulp-html-ssi gulp-html-tag-include gulp-html-prettify gulp-htmlmin --save-dev
// npm install gulp-imagemin gulp-html-extend gulp-advanced-include-template --save-dev
//
var async = require('async');
var gulp = require('gulp');
var connect = require('gulp-connect'); // http://localhost:8080
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

var sass = require('gulp-sass'); // sass
var autoprefixer = require('autoprefixer'); // css prefix
var postcss = require('gulp-postcss'); // css prefix
var cleanCSS = require('gulp-clean-css'); // min css

var uglify = require('gulp-uglify') // min js
var concat = require('gulp-concat'); // min + mix js
var useref = require('gulp-useref');

var includer = require('gulp-html-ssi'); // html include
var include = require('gulp-html-tag-include'); // html include
var prettify = require('gulp-html-prettify'); // html prettify
var htmlmin = require('gulp-htmlmin'); // min html

var imagemin = require('gulp-imagemin'); // 圖片壓縮 (gif, jpg, png, svg)
var extender = require('gulp-html-extend');// 繼承樣板
const includeTemplate = require('gulp-advanced-include-template'); // 區塊include(head)

// var browserify = require('gulp-browserify');
// const splitFiles = require("gulp-split-files");
// var del = require('del'); // 檔案多選
// var clean = require('gulp-clean'); // 刪除檔案

// iconfont
// var iconfont = require('gulp-iconfont');
// var runTimestamp = Math.round(Date.now() / 1000);
// var iconfontCss = require('gulp-iconfont-css');
// var fontName = "font-bcc";
// var cssClass = "bcc";
//
//
//=============================================================================
//
// ***** 專案名稱 *****
//
//var projec_name = "template"; // 總樣板
var projec_name = "GX"; // 官網 2018
//var projec_name = "test"; // 官網新架構
//
//
//=============================================================================



// Server
gulp.task('connect', function(cb) {
  connect.server({
    root: 'project',
    livereload: true,
  });
});



// CSS
gulp.task('sass', function() {
  var processors = [ // 定義 postCSS 所需要的元件
      autoprefixer({browsers: ['last 5 version']}) // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
  ];
  return gulp.src('project/'+ projec_name +'/edit/style/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass(
      {outputStyle: 'compact'}
    )
    .on('error', sass.logError))
    .pipe(postcss(processors)) // 將 PostCSS 插入流程
    .pipe(cleanCSS()) // 壓縮
    // .pipe(rename(function(path) {
    //   path.basename += ".min";
    //   //path.extname = ".css";
    // }))
    .pipe(sourcemaps.write({addComment: false}))
    .pipe(gulp.dest('project/'+ projec_name +'/www/style'))
    .pipe(connect.reload())
    .pipe(livereload());
});



// JS
gulp.task('script', function() {
  return gulp.src(['project/'+ projec_name +'/edit/component/!(_)**/*.js'])
    //.pipe(gulp.dest('project/composer/'))
    //.pipe(uglify())
    // .pipe(rename(function(path) {
    //   path.basename += ".min";
    //   //path.extname = ".js";
    // }))
    .pipe(concat('all.js', {newLine: ';'}))
    .pipe(gulp.dest('project/'+ projec_name +'/www/component'))
    .pipe(livereload());
});



// html
gulp.task('html', function () {
    gulp.src('project/'+ projec_name +'/edit/!(_)*.html')
        .pipe(extender({annotations:false,verbose:false})) // default options
        .pipe(includeTemplate())
        .pipe(include())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('project/'+ projec_name +'/www'))
        .pipe(connect.reload())
        .pipe(livereload());
});
// html 內頁
gulp.task('include', function () {
    gulp.src('project/'+ projec_name +'/edit/html/!(_)**/*.html')
        .pipe(extender({annotations:false,verbose:false})) // default options
        .pipe(includeTemplate())
        .pipe(include())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('project/'+ projec_name +'/www/html'))
        .pipe(connect.reload())
        .pipe(livereload());
});



// img
gulp.task('img', () =>
  gulp.src('project/'+ projec_name +'/www/image/**/**')
      .pipe(imagemin())
      .pipe(gulp.dest('project/'+ projec_name +'/www/image'))
);



// Icon font
// gulp.task('fonts', function() {
//   gulp.src(['edit/fonts/**/svg/*.svg'])
//     .pipe(iconfontCss({
//       fontName: fontName,
//       path: 'edit/fonts/_icons.scss',
//       targetPath: '../_' + fontName + '.scss',
//       fontPath: '../fonts/' + fontName + '',
//       cssClass: cssClass,
//       centerHorizontally: true,
//       normalize: true,
//       fontHeight: 1001
//     }))
//     .pipe(iconfont({
//       fontName: fontName,
//       formats: [
//         'ttf',
//         'eot',
//         'woff',
//         'woff2'
//       ],
//     }))
//     .on('glyphs', (codepoints, options) => {
//       console.log("CODEPOINTS", codepoints, options);
//     })
//     .pipe(gulp.dest('edit/fonts/' + fontName + ''))
//
//   gulp.src(['edit/fonts/**/svg/*.svg'])
//     .pipe(iconfont({
//       fontName: fontName,
//       formats: [
//         'ttf',
//         'eot',
//         'woff',
//         'woff2'
//       ],
//     }))
//     .on('glyphs', (codepoints, options) => {
//       console.log("CODEPOINTS", codepoints, options);
//     })
//     .pipe(gulp.dest('project/fonts/' + fontName + ''));
// });



// Watch
gulp.task('watch', function() {
  livereload.listen();
    gulp.watch('project/'+ projec_name +'/edit/style/**/*.{scss,sass}', ['sass']),
    //gulp.watch('project/'+ projec_name +'/edit/image/**/**', ['img']),
    //gulp.watch('project/'+ projec_name +'edit/component/!(_)**/!(_)*.js', ['script']),
    gulp.watch('project/'+ projec_name +'/edit/!(_)*.html', ['html']),
    gulp.watch('project/'+ projec_name +'/edit/html/!(_)**/*.html', ['include'])
});



// Creating a default task
gulp.task('default', ['sass', 'html', 'include', 'connect', 'watch']);
