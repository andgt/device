const { parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: { baseDir: 'source/' },
    port: 8080,
    ui: { port: 3000 },
    open: true,
    notify: false,
  })
}

function startwatch() {
  watch('source/**/*.css').on('change', browserSync.reload);
  watch('source/**/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.default = parallel(browsersync, startwatch);
