const gulp = require('gulp')
const del = require('del')

const { join } = require('./utils')

del([
  join('/docs/**/*'),
  '!' + join('/docs/node_modules'),
  '!' + join('/docs/node_modules/**/*'),
  '!' + join('/docs/book.json'),
  '!' + join('/docs/README.md'),
  '!' + join('/docs/SUMMARY.md')
]).then((paths) => {
  console.log('Deleted files and folders:\n', paths.join('\n'))
})
