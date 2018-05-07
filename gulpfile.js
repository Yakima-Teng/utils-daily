'use strict'

const gulp = require('gulp')
const fs = require('fs')
const scp = require('gulp-scp2')
const path = require('path')
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown')
const rename = require('gulp-rename')
const chalk = require('chalk')
const config = require('./config')
const objFileNames = {
  // '_root': false
}
let arrFileNames = [
  // { folder: '_root', fileNames: [] },
  // .etc.
]

// 自动生成docs/SUMMARY.md文件（手动生成该文件太麻烦了-_-）
gulp.task('docs:generateSummary', ['jsdocToMarkdown'], () => {
  const srcArr = ['./docs/**/*.md', '!./docs/README.md', '!./docs/SUMMARY.md', '!./docs/_book/**/*', '!./docs/node_modules/**/*']
  return gulp.src(srcArr)
    .on('data', file => {
      const filePath = file.history[0]
      const arrFolderAndFileName = filePath.split(path.join(__dirname, 'docs'))[1].split(/[\\/]/)
      arrFolderAndFileName.shift()
      if (arrFolderAndFileName.length === 1) {
        const fileName = arrFolderAndFileName[0]
        if (!objFileNames['_root']) {
          arrFileNames.push({
            folderName: '_root',
            fileNames: [fileName]
          })
          objFileNames['_root'] = true
        } else {
          arrFileNames.find(item => item.folderName === '_root').fileNames.push(fileName)
        }
      } else if (arrFolderAndFileName.length === 2) {
        const folderName = arrFolderAndFileName[0]
        const fileName = arrFolderAndFileName[1]
        if (!objFileNames[folderName]) {
          arrFileNames.push({
            folderName: folderName,
            fileNames: [fileName]
          })
          objFileNames[folderName] = true
        } else {
          arrFileNames.find(item => item.folderName === folderName).fileNames.push(fileName)
        }
      }
      arrFileNames.sort()
      arrFileNames.forEach(item => item.fileNames.sort())
    })
    .on('end', function () {
      let textToWrite = '# 目录\n' +
        '\n' +
        '* [前言](README.md)\n' +
        arrFileNames.map(folder => {
          const folderName = folder.folderName
          if (folderName !== '_root') {
            let text = `* [${folder.folderName}](./${folderName}/README.md)\n`
            text += folder.fileNames.filter(fileName => fileName !== 'README.md').map(fileName => {
              return `  * [${fileName.replace('.md', '')}](./${folderName}/${fileName})`
            }).join('\n')
            return text
          } else {
            return folder.fileNames.map(fileName => {
              return `* [${fileName.replace('.md', '')}](./${fileName})`
            }).join('\n')
          }
        }).join('\n')
      fs.writeFile('./docs/SUMMARY.md', textToWrite, {
        flag: 'w',
        encoding: 'utf-8',
        mode: '0666'
      }, function (err) {
        if (err) {
          console.log("文件写入失败")
        } else {
          console.log("文件写入成功");
        }
      })
    })
})

const deploymentConfig = config.deployment
gulp.task('deployToServer', () => {
  return gulp.src(deploymentConfig.src)
    .pipe(scp({
      host: deploymentConfig.host,
      username: deploymentConfig.username,
      password: deploymentConfig.password,
      dest: deploymentConfig.dest,
      readyTimeout: deploymentConfig.readyTimeout
    }))
    .on('error', e => {
      console.log(e)
    })
})


// 自动生成/index.js文件（手动生成该文件太麻烦了-_-）
const jsdocSourceFiles = ['./*.js', '!./_*.js', '!./index.js', '!./gulpfile.js', '!./config-example.js', '!./config.js']
let arrFileNamesForIndexJS = []
gulp.task('generateIndexJS', () => {
  return gulp.src(jsdocSourceFiles)
    .on('data', file => {
      const filePath = file.history[0]
      const fileName = filePath.split(/[\\/]/).reverse()[0]
      arrFileNamesForIndexJS.push(fileName)
    })
    .on('end', function () {
      let textToWrite = '// this file is generated by gulp task ^_^\n' +
        '\n' +
        arrFileNamesForIndexJS.map(fileName => {
          return `import ${fileName.replace('.js', '')} from './${fileName}'`
        }).join('\n') +
        '\n\n' +
        'export default {\n' +
        arrFileNamesForIndexJS.map(fileName => {
          return '  ' + fileName.replace('.js', '')
        }).join(',\n') +
        '\n}\n'
      fs.writeFile('./index.js', textToWrite, {
        flag: 'w',
        encoding: 'utf-8',
        mode: '0666'
      }, function (err) {
        if (err) {
          console.log("文件写入失败")
        } else {
          console.log("文件写入成功");
        }
      })
    })
})

gulp.task('jsdocToMarkdown', function () {
  return gulp.src(jsdocSourceFiles)
    // .pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
    .pipe(gulpJsdoc2md())
    .on('error', function (err) {
      console.log(chalk.red('jsdoc2md failed'), err.message)
    })
    .pipe(rename(function (path) {
      path.extname = '.md'
    }))
    .pipe(gulp.dest('docs'))
})
