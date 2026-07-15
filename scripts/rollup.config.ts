import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import bundleSize from 'rollup-plugin-bundle-size'
import license from 'rollup-plugin-license'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
// eslint-disable-next-line import/extensions
const pkg = require('../package.json')

const version = process.env.VERSION || pkg.version

export default (config) => {
  const {
    input, fileName, name, env, format
  } = config
  const isProd = env === 'production'
  return {
    input: {
      input,
      external: [],
      plugins: [
        json(),
        typescript(),
        commonjs(),
        resolve({ browser: true }),
        babel({
          babelHelpers: 'bundled',
          presets: ['@babel/preset-env']
        }),
        isProd && terser(),
        license({
          // eslint-disable-next-line max-len
          banner: `Name: ${pkg.name}\nVersion: ${version}\nCreated: <%= moment().format('YYYY-MM-DD HH:mm:ss') %>`
        }),
        isProd && bundleSize()
      ].filter(Boolean)
    },
    output: {
      file: fileName,
      format,
      name,
      globals: {
        $utils: '$utils'
      },
      compact: isProd
    }
  }
}
