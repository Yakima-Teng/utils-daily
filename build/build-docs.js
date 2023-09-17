/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fse = require('fs-extra')
const childProcess = require('child_process')
/* eslint-enable @typescript-eslint/no-var-requires */

// 用vitepress编译文档并将结果拷贝到/dist/docs目录下
const buildDocs = () => new Promise((resolve) => {
  try {
    // eslint-disable-next-line no-console
    console.log('开始：编译/docs目录下的文件')
    fse.removeSync(path.join(__dirname, '../dist/docs'))
    fse.removeSync(path.join(__dirname, '../docs/.vitepress/dist'))
    const cp = childProcess.exec('vitepress build ./docs', (error) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(`error: ${error.message}`)
        cp.kill(1)
        return
      }

      // 构建完成后，将docs/.vitepress/dist目录下的文件拷贝到/dist目录下，并删除/docs目录
      fse.copySync(
        path.join(__dirname, '../docs/.vitepress/dist'),
        path.join(__dirname, '../dist/docs'),
        { overwrite: true }
      )
      fse.removeSync(path.join(__dirname, '../docs'))
      // eslint-disable-next-line no-console
      console.log('结束：编译/docs目录下的文件')
      cp.kill(0)
      resolve()
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
  }
})

module.exports = {
  buildDocs
}
