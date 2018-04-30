const fs = require('fs')
const path = require('path')
const express = require('express')
const rewrite = require('express-urlrewrite')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  stats: {
    // `webpack --colors` equivalent
    colors: true,
    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks: false
  }
}))

fs.readdirSync(__dirname).forEach(file => {
  if (fs.statSync(path.join(__dirname, file)).isDirectory()) {
    app.use(rewrite(`/${file}/*.html`, `/${file}/index.html`))
  }
})

app.use(express.static(__dirname))

const port = process.env.PORT || 8080

module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
