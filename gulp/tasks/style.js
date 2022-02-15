import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';  /* Группировка media запросов*/
import autoPrefixer from 'gulp-autoprefixer';  /* добавление вендорных префиксов */
import cleanCss from 'gulp-clean-css';  /* сжатие css файлов */
import rename from 'gulp-rename';  /* для изменения названия файла */
const sass = gulpSass(dartSass)

export const style = () => {
   return app.gulp.src(app.path.src.style, {sourcemaps: true})  /* карты исходников*/
   .pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: 'CSS',
    message: 'Error: <%= error.message %>'
})))
.pipe(sass({
    outputStyle: 'expanded'
}))
    .pipe(groupCssMediaQueries())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserlist: ['last 3 versions'],  /* Поддержка версий браузера */
        cascade: true
    }))
    .pipe(cleanCss())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browserSync.stream())
}