/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const path = require('path')
const fse = require('fs-extra')

const moveDist = () => new Promise((resolve) => {
  gulp
    .src(path.join(__dirname, '../dist/**/*'))
    .pipe(gulp.dest(path.join(__dirname, '../../../dist/utils')))
    .on('end', () => {
      fse.removeSync(path.join(__dirname, '../dist'))
      resolve()
    })
})

module.exports = {
  moveDist
}
