const path = require('path')
const buble = require('rollup-plugin-buble')
const flow = require('rollup-plugin-flow-no-whitespace')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')
const replace = require('rollup-plugin-replace')
const version = process.env.VERSION || require('../package.json').version
const banner = `
/**
 * utils-daily v${version}
 * (c) ${new Date().getFullYear()} Yakima Teng
 * @license MIT
 */
`

const resolve = _path => path.resolve(__dirname, '../', _path)

module.exports = [
  // browser development
  {
    file: resolve('dist/libs-utils.js'),
    format: 'umd',
    env: 'development'
  },
  {
    file: resolve('dist/libs-utils.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    file: resolve('dist/libs-utils.common.js'),
    format: 'cjs'
  },
  {
    file: resolve('dist/libs-utils.esm.js'),
    format: 'es'
  }
].map(genConfig)

function genConfig (opts) {
  const config = {
    input: {
      input: resolve('./index.js'),
      plugins: [
        flow(),
        node(),
        cjs(),
        replace({ __VERSION__: version }),
        buble()
      ]
    },
    output: {
      file: opts.file,
      format: opts.format,
      banner,
      name: 'UtilsDaily'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}
