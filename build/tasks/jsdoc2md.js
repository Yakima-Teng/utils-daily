const fs = require('fs')
const gulp = require('gulp')
const through2 = require('through2')
const jsdoc2md = require('jsdoc-to-markdown')

const { join, jsdocSrcFiles } = require('../utils')

module.exports = () => gulp.src(jsdocSrcFiles)
  .pipe(through2.obj(function (file, enc, callback) {
    const self = this
    const fileName = file.history[0].split(/[/\\]/).reverse()[0]
    const srcFilePath = './' + fileName

    const template = fs.readFileSync(join('/jsdoc2md.hbs'), 'utf8')
    jsdoc2md
      .render({
        files: file.history[0],
        configure: join('/jsdoc2md.json'),
        'heading-depth': 2,
        'example-lang': 'javascript',
        template
      })
      .then(output => {
        // 修改文件内容，如果需要统计加内容，除了修改jsdoc模板外，还可以直接在这里加
        file.contents = Buffer.from(output, 'utf8')
        // 修改文件后缀名.js => .md，不需要去引用gulp-rename插件
        file.path = file.path.replace(/\.js$/, '.md')
        self.push(file)
        callback()
      })
  }))
  .pipe(gulp.dest(join('/docs')))
