'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('lint-react-native',
  shell.task('eslint --no-eslintrc -c .eslintrc.js --fix App.js')
)
gulp.task('lint-assets',
  shell.task('eslint --no-eslintrc -c .eslintrc.js --fix src/', { cwd: 'webViewAssets' })
)
gulp.task('lint', gulp.parallel('lint-react-native', 'lint-assets'))

gulp.task('compile-assets',
  shell.task('npm run build', { cwd: 'webViewAssets' })
)
gulp.task('build-asset', gulp.series('lint-assets', 'compile-assets'))
gulp.task('run-android', shell.task('react-native run-android'))
gulp.task('watch-android',
  gulp.series('lint', 'compile-assets', 'run-android', () => {
      gulp.watch('src/', gulp.series('build-asset', 'run-android'))
  })
)
