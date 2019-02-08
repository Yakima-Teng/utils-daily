const path = require('path')

const join = exports.join = (targetPath) => path.join(__dirname, '..', targetPath)

exports.jsdocSrcFiles = [
  join('/src/**/*.js'),
  '!' + join('/src/**/_*.js'),
  '!' + join('/src/index.js')
]
