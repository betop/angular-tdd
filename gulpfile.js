var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var karmaServer = require('karma').Server;

gulp.task('serve', function () {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: ["app"],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['app/**/*.*'])
    .on('change', browserSync.reload);
});

gulp.task('serve-test', function () {
  browserSync.init({
    notify: false,
    port: 8081,
    server: {
      baseDir: ["test", "app"],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['app/**/*.*'])
    .on('change', browserSync.reload);
});

gulp.task('test-browser', function (done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: ['mocha']
  }, done).start();
});