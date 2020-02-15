'use strict'

const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('lint', shell.task('eslint --no-eslintrc -c .eslintrc.js --fix src/'))
gulp.task('compile', shell.task('webpack --mode ' + (process.env.NODE_ENV || 'development')))
gulp.task('build', gulp.series('lint', 'compile'))
gulp.task(
    'watch',
    gulp.series('build', () => {
        gulp.watch('src/', gulp.task('build'))
    })
)
