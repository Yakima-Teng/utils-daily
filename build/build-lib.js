/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const rollup = require('rollup')
// eslint-disable-next-line import/extensions
const pkg = require('../package.json')
const configFactory = require('./rollup.config')
/* eslint-enable @typescript-eslint/no-var-requires */

const definitionFilePath = path.join(__dirname, '../src/all.d.ts')
const definitionFileContent = fs.readFileSync(definitionFilePath, 'utf8')

const fsPromises = fs.promises

async function build(option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
  // eslint-disable-next-line no-console
  console.log(`成功生成文件：${option.output.file}`)
}

const pkgName = pkg.name

const buildLib = async () => {
  try {
    // eslint-disable-next-line no-console
    console.log('开始：构建JS SDK')

    // 生成utils-daily.js
    await build(configFactory({
      input: './src/index.ts',
      fileName: `./dist/library/${pkgName}.js`,
      name: 'u',
      format: 'umd',
      env: 'development'
    }))
    // 生成utils-daily.min.js
    await build(configFactory({
      input: './src/index.ts',
      fileName: `./dist/library/${pkgName}.min.js`,
      name: 'u',
      format: 'umd',
      env: 'production'
    }))
    // 生成utils-daily.common.js
    await build(configFactory({
      input: './src/index.ts',
      fileName: `./dist/library/${pkgName}.common.js`,
      name: 'u',
      format: 'cjs',
      env: 'development'
    }))
    // 生成utils-daily.esm.js
    await build(configFactory({
      input: './src/index.ts',
      fileName: `./dist/library/${pkgName}.esm.js`,
      name: 'u',
      format: 'esm',
      env: 'development'
    }))
    // 生成utils-daily.d.ts
    await fsPromises.writeFile(
      path.join(__dirname, `../dist/library/${pkgName}.d.ts`),
      definitionFileContent.replace('{{ version }}', pkg.version)
    )

    // eslint-disable-next-line no-console
    console.log('结束：构建JS SDK')
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
}

module.exports = {
  buildLib
}
