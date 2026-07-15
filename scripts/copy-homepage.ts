import path from 'path'
import { createRequire } from 'module'
import gulp from 'gulp'
import ejs from 'gulp-ejs'
import dayjs from 'dayjs'
import { getDirname } from 'nsuite'

const require = createRequire(import.meta.url)
// eslint-disable-next-line import/extensions
const pkg = require('../package.json')

// eslint-disable-next-line no-underscore-dangle
const __dirname = getDirname(import.meta.url)

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

export { copyHomepage }
