const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build-ES6', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(babel({
            plugins: ["transform-runtime"]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task("watch", function(e){
    gulp.watch("src/*.js",[
        "build-ES6"
    ]).on("change",function(e){
        console.log("file:"+e.path+" was "+e.type);
    })
});