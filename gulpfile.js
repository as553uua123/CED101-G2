const { src, dest, series, parallel, watch } = require("gulp"); //src=來源, dest=目的地, 引入套件



//合併檔案
const concat = require("gulp-concat");
function concatCss() {
    return src("css/*.css") // '*.css'是所有的css檔案 '*.*'是所有檔案（不管類型）
        .pipe(concat("all.css")) //合併成all.css這個檔案
        .pipe(dest("css")); //目的地為app/css
}
exports.concat = concatCss;



//rename
const rename = require("gulp-rename");
function change() {
    return src("css/*.css")
        .pipe(
            rename(function (path) {
                path.basename += "-change";
                path.extname = ".css";
            })
        )
        .pipe(dest("css"));
}
exports.renameCss = change;



//uglify 壓縮
const uglify = require("gulp-uglify");
function ugjs() {
    return src("js/*.js").pipe(uglify()).pipe(dest("app/js"));
}
exports.ugjs = ugjs;



//sass
const sass = require("gulp-sass");
function sassStyle() {
    return src("./sass/*.scss").pipe(sass().on("error", sass.logError)).pipe(dest("./app/css"));
}
exports.sass = sassStyle;



//壓縮圖片
function img(){
    return src('./images/*.*') //
    .pipe(imagemin())
    .pipe(
        rename(function (path) {
            path.basename += "-min";
        })
    )
    .pipe(dest('app/images')) 
}
exports.imagemin = img