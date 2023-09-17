/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fse = require('fs-extra')
const dayjs = require('dayjs')
const { generateDocs } = require('./generate-docs')
const { buildDocs } = require('./build-docs')
const { buildLib } = require('./build-lib')
const { copyHomepage } = require('./copy-homepage')
const { moveDist } = require('./moveDist')
/* eslint-enable @typescript-eslint/no-var-requires */

// eslint-disable-next-line no-void
void (async () => {
  const startTime = dayjs()
  fse.removeSync(path.join(__dirname, '../dist'))
  await copyHomepage()
  await generateDocs()
  await buildDocs()
  await buildLib()
  await moveDist()
  const endTime = dayjs()
  const duration = endTime.diff(startTime, 'seconds')
  // eslint-disable-next-line no-console
  console.log(`代码lint+编译耗时：${duration}秒`)
})()
