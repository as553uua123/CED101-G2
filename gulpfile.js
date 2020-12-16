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



//sass轉css
const sass = require("gulp-sass");
function sassStyle() {
    return src("./sass/*.scss").pipe(sass().on("error", sass.logError)).pipe(dest("./css"));
}
exports.sass = sassStyle;



//壓縮圖片
const imagemin = require("gulp-imagemin");
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


//clean
const clean = require("gulp-clean");
function clearCss() {
    return src("app/css/*.css", {
        read: false,
        force: true, //force to delete
    }).pipe(clean());
}
exports.del = clearCss;



//watch




//babel (es6->es5)
const babel = require("gulp-babel");
function babels() {
    return src("js/*.js")
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(dest("app/js"));
}
exports.jsbabel = babels;