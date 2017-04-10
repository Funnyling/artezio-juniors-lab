const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task('dev', function () {
    return tsProject.src()
        .pipe(tsProject(ts.reporter.longReporter()))
        .js.pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
    console.log('impl me plz');
});