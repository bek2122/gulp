

export const server = (done) => {
       app.plugins.browserSync.init({
           server: {
               baseDir: `${app.path.build.html}`  /* базовая папка откуда нам нужно запустить файл */
           },
           notify: false,  /* сообщения в браузере */
           port: 3000
       })
}