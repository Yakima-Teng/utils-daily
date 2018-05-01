const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  mode: process.env.NODE_ENV || 'development',

  devtool: 'none',

  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.js')
    // judge whether dir is a directory and whether there is a `app.js` in it in case that it's a directory
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      // entries[dir] = ['es6-promise/auto', entry]
      entries[dir] = entry
    }
    return entries
  }, {}),

  output: {
    // file built by webpack-dev-server is stored in memory
    path: __dirname,
    filename: '[name]/index.js',
    // chunkFilename: '[name]/[name].chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    alias: {
      'examples': path.join(__dirname, '..', 'examples')
    }
  },

  /**
   * By default the current directory is used,
   * but it's recommended to pass a value in your configuration.
   * This makes your configuration independent from CWD (current working directory).
   */
  context: __dirname,
  node: {
    // this makes dirname of the input file relative to the context option.
    __dirname: true
  },

  plugins: [
    // webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'shared',
    //   filename: 'shared-[hash].min.js'
    // }),
    new HtmlWebpackPlugin({
      filename: './basic/index.html',
      template: './basic/index-template.html',
      // 允许插件修改哪些内容，包括head与body
      inject: true,
      // 为静态资源生成hash值
      hash: true
    }),
    new webpack.DefinePlugin({
      // JSON.stringify('development') will generate string like "'development'" (quotes in quotes)
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    })
  ],

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
