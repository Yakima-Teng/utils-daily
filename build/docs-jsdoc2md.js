const fs = require('fs')
const gulp = require('gulp')

const jsdoc2md = require('./tasks/jsdoc2md')
const { join, jsdocSrcFiles } = require('./utils')

const { WATCH } = process.env

fs.copyFileSync(join('/README.md'), join('/docs/README.md'))

jsdoc2md()

if (WATCH === '1') {
  gulp.task('jsdoc2md', jsdoc2md)
  gulp.watch(jsdocSrcFiles, ['jsdoc2md'])
}
