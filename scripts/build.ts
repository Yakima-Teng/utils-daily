/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const dayjs = require('dayjs')
const { generateDocs } = require('./generate-docs')
const { buildDocs } = require('./build-docs')
const { buildLib } = require('./build-lib')
const { copyHomepage } = require('./copy-homepage')
/* eslint-enable @typescript-eslint/no-var-requires */

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
