import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import dayjs from 'dayjs'
import { getDirname } from 'nsuite'
import { generateDocs } from './generate-docs'
import { buildDocs } from './build-docs'
import { buildLib } from './build-lib'
import { copyHomepage } from './copy-homepage'

// eslint-disable-next-line no-underscore-dangle
const __dirname = getDirname(import.meta.url)

// eslint-disable-next-line no-void
void (async () => {
  const startTime = dayjs()
  fse.removeSync(path.join(__dirname, '../dist'))

  // 更新README.md中的版本号
  const versionNumber = process.env.VERSION
  function updateVersionNumber(fileName) {
    const pathFile = path.join(__dirname, `../${fileName}`)
    const content = fs.readFileSync(pathFile, { encoding: 'utf-8' })
    const newContent = content.replace(/(utils-daily@)[^/]+(\/)/m, `$1${versionNumber}$2`)
    fs.writeFileSync(pathFile, newContent, { encoding: 'utf-8' })
  }
  if (versionNumber) {
    updateVersionNumber('README.md')
    updateVersionNumber('README_zh-CN.md')
  }

  await copyHomepage()
  await generateDocs()
  await buildDocs()
  await buildLib()
  const endTime = dayjs()
  const duration = endTime.diff(startTime, 'seconds')
  // eslint-disable-next-line no-console
  console.log(`代码lint+编译耗时：${duration}秒`)
})()
