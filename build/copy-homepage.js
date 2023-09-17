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
  console.log('开始：渲染index.html')
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
      console.log('结束：渲染index.html')
      resolve()
    })
})

module.exports = {
  copyHomepage
}
