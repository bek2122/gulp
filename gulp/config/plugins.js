import plumber from 'gulp-plumber';  /* обработка ошибок */
import notify from 'gulp-notify';  /* уведомления */
import browserSync from 'browser-sync';  /* этот плагин для открытия браузера и перезагрузки */


// экспортируем объект
export const plugins = {
    plumber,
    notify,
    browserSync
}