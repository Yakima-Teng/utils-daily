/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const path = require('path')
const ejs = require('gulp-ejs')
const dayjs = require('dayjs')
// eslint-disable-next-line import/extensions
const pkg = require('../package.json')
/* eslint-enable @typescript-eslint/no-var-requires */

const { version } = pkg

const copyHomepage = () => new Promise((resolve) => {
  // eslint-disable-next-line no-console
  console.log('start rendering index.html and copy favicon.ico')
  let count = 0
  const endCallback = () => {
    count += 1
    if (count === 2) {
      resolve()
    }
  }
  gulp
    .src(path.join(__dirname, '../index.html'))
    .pipe(ejs({
      pkg,
      version,
      lastUpdated: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }))
    .pipe(gulp.dest(path.join(__dirname, '../dist')))
    .on('end', () => {
      // eslint-disable-next-line no-console
      console.log('finish rendering index.html')
      endCallback()
    })
  gulp
    .src(path.join(__dirname, '../favicon.ico'))
    .pipe(gulp.dest(path.join(__dirname, '../dist')))
    .on('end', () => {
      // eslint-disable-next-line no-console
      console.log('finish copying favicon.ico')
      endCallback()
    })
})

module.exports = {
  copyHomepage
}
