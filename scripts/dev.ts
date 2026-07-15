import path from 'path'
import fse from 'fs-extra'
import gulp from 'gulp'
import { getDirname } from 'nsuite'
import { create as createBrowserSync } from 'browser-sync'
import { generateDocs } from './generate-docs'
import { buildDocs } from './build-docs'
import { buildLib } from './build-lib'
import { copyHomepage } from './copy-homepage'

// eslint-disable-next-line no-underscore-dangle
const __dirname = getDirname(import.meta.url)
const browserSync = createBrowserSync()

// eslint-disable-next-line no-void
void (async () => {
  fse.removeSync(path.join(__dirname, '../dist'))
  await copyHomepage()
  await generateDocs()
  await buildDocs()
  await buildLib()

  // 启动服务
  // eslint-disable-next-line no-console
  console.log('开始：启动服务')
  await new Promise((resolve) => {
    browserSync.init({
      port: 9004,
      open: false,
      startPath: '/utils-daily',
      callbacks: {
        ready: () => {
          resolve()
          // eslint-disable-next-line no-console
          console.log('结束：启动服务')
        }
      },
      ui: {
        port: 9005
      },
      server: {
        baseDir: path.join(__dirname, '../'),
        routes: {
          '/utils-daily': path.join(__dirname, '../dist')
        },
        middleware: [
          (req, res, next) => {
            if (req.url === '/') {
              res.writeHead(302, {
                location: '/utils'
              })
              res.end('')
              return
            }
            next()
          }
        ]
      }
    })
  })

  gulp.watch(
    [
      path.join(__dirname, '../index.html')
    ],
    async () => {
      // eslint-disable-next-line no-console
      console.log('检测到文件变动：index.html')
      await copyHomepage()
      browserSync.reload()
    }
  )
  gulp.watch(
    [
      path.join(__dirname, '../.doc.config.ts'),
      path.join(__dirname, '../README.md'),
      path.join(__dirname, '../CHANGELOG.md'),
      path.join(__dirname, '../CONTRIBUTING.md')
    ],
    async () => {
      // eslint-disable-next-line no-console
      console.log('检测到文件变动：.doc.config.ts、README.md、CHANGELOG.md、CONTRIBUTING.md')
      await generateDocs()
      await buildDocs()
      browserSync.reload()
    }
  )
  gulp.watch(
    [
      path.join(__dirname, '../src/**/*')
    ],
    async () => {
      // eslint-disable-next-line no-console
      console.log('检测到文件变动：src/**/*')
      await generateDocs()
      await buildDocs()
      await buildLib()
      browserSync.reload()
    }
  )
})()
