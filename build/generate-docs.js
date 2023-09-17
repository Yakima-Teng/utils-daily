/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')
/* eslint-enable @typescript-eslint/no-var-requires */

const generateDocs = () => {
  const sourceFiles = glob.sync(path.join(__dirname, '../src/**/*.ts'))

  const configFiles = (() => {
    const arr = []
    sourceFiles.forEach((filePathAndName) => {
      const apiMatches = (() => {
        const pageContent = fse.readFileSync(filePathAndName, 'utf8')
        // 单个文件中的所有包含@apiAnalyze的注释集合
        const tempArr = pageContent.match(/\/\*([*\s\r\n])*?@apiAnalyze(.|[\r\n])*?\*\//mg)
        if (!tempArr || tempArr.length === 0) {
          return []
        }
        return tempArr.map((item) => {
          const lines = item.split('\n')
          const lineData = []
          lines.forEach((line) => {
            // 注释开头部分的/**直接忽略
            if (/\/\*\*/.test(line)) {
              return
            }
            if (/^\s\*\s@[^\s]+/.test(line)) {
              // eslint-disable-next-line no-console
              const key = line.match(/(?<=@)[^\s]+/)?.[0] || ''
              const value = line.match(/(?<=@[^\s]+\s).*/)?.[0] || ''
              lineData.push({ key, value })
              return
            }
            // 开头没有@符号的话，将对应内容追加到lineData中最后一个元素的value中
            if (/^\s\*\s[^@]/.test(line)) {
              lineData[lineData.length - 1].value += `\n${line.replace(/^\s\*\s/, '')}`
            }
          })
          lineData.forEach((d) => {
            // 去除开头和结尾的空格和换行符
            d.value = d.value
              .replace(/^[\s\n]+/, '')
              .replace(/[\s\n]+$/, '')
          })
          return lineData
        })
      })()
      if (apiMatches.length > 0) {
        arr.push({
          filePathAndName,
          apiMatches
        })
      }
    })
    return arr
  })()

  const sidebar = []

  const pathRoot = path.join(__dirname, '../')
  const pathSrc = path.join(pathRoot, 'src')
  const pathDocs = path.join(pathRoot, 'docs')
  const pathRawVitePressConfig = path.join(pathRoot, '.doc.config.ts')
  const pathVitePressConfig = path.join(pathDocs, '.vitepress/config.ts')

  // eslint-disable-next-line no-console
  console.log('开始：解析代码，生成markdown文档')
  fse.emptyDirSync(pathDocs)

  configFiles.forEach((file) => {
    const relativePathAndName = file.filePathAndName.replace(pathSrc, '')
    // 测试用例文件地址（如有）
    const pathTestFile = path.join(__dirname, '../test', relativePathAndName.replace(/\.ts$/, '.test.ts'))
    const categoryName = relativePathAndName.match(/(?<=\/)[a-zA-Z]+(?=\/)/)?.[0]
    const fileName = relativePathAndName.match(/(?<=\/)[a-zA-Z]+(?=\.ts)/)?.[0]
    const outFilePathAndName = relativePathAndName
      .replace(/[\\/]/g, '-')
      .replace(/^-/, '')
      .replace(/\.ts$/, '')

    const sidebarItem = sidebar.find((cat) => cat.text === categoryName)
    const sidebarItemChild = {
      text: fileName,
      link: `/${outFilePathAndName}`
    }
    if (sidebarItem) {
      sidebarItem.items.push(sidebarItemChild)
    } else {
      sidebar.push({
        text: categoryName,
        items: [sidebarItemChild]
      })
    }

    const fileContent = (() => {
      const collections = file.apiMatches
      const mapCollectionApiMatches = collections.map((collection) => collection.reduce((prev, curr) => {
        const oldVal = prev[curr.key]
        const newVal = curr.value
        if (!oldVal) {
          prev[curr.key] = newVal
        } else if (Array.isArray(oldVal)) {
          prev[curr.key].push(newVal)
        } else {
          prev[curr.key] = [prev[curr.key], newVal]
        }
        return prev
      }, {}))
      const tempArr = []

      // 约定一个文件仅对外暴漏一个api，所以这里只取第一个结果即可
      const mapApiMatches = mapCollectionApiMatches[0]

      if (mapApiMatches.rename) {
        tempArr.push(`# ${fileName} as ${mapApiMatches.rename}`)
      } else {
        tempArr.push(`# ${fileName}`)
      }

      if (!mapApiMatches.since) {
        throw new Error(`${fileName}缺少'@since'注解，请补充`)
      }
      tempArr.push('')
      tempArr.push(`> 该方法在${mapApiMatches.since}及以上版本中可用`)
      tempArr.push('')

      tempArr.push('')
      // eslint-disable-next-line max-len
      tempArr.push(`> 源码：[src${relativePathAndName}](https://github.com/Yakima-Teng/utils-daily/blob/master/src${relativePathAndName})`)
      tempArr.push('')

      tempArr.push('')
      tempArr.push(`${mapApiMatches.apiAnalyze}`)
      tempArr.push('')

      // 高亮的说明文案
      if (mapApiMatches.note) {
        tempArr.push('::: tip 说明')
        tempArr.push(mapApiMatches.note)
        tempArr.push(':::')
      }

      if (mapApiMatches.param) {
        if (typeof mapApiMatches.param === 'string') {
          mapApiMatches.param = [mapApiMatches.param]
        }
        if (mapApiMatches.param.length > 0) {
          tempArr.push('')
          tempArr.push('## 入参')
          tempArr.push('')

          tempArr.push('|字段|类型|可选|说明|')
          tempArr.push('|----|----|----|----|')
          mapApiMatches.param.forEach((str) => {
            try {
              const fieldNameWrapper = str.match(/[{[][a-zA-Z\s?:,|<>]+[}\]]/)?.[0]
              const fieldName = str.split(fieldNameWrapper)[0].replace(/(^\s+)|(\s+$)/, '')
              const fieldType = fieldNameWrapper.match(/(?<=[{[])[a-zA-Z\s?:,|<>]+(?=[}\]])/)?.[0]
              const optional = fieldNameWrapper.startsWith('[')
              const note = str.split(fieldNameWrapper)[1].replace(/(^\s+)|(\s+$)/, '')
              tempArr.push(`|${fieldName}|\`${fieldType}\`|${optional ? '可选' : '必传'}|${note}|`)
            } catch (err) {
              // eslint-disable-next-line no-console
              console.log(str)
              throw err
            }
          })
        }
      }

      if (mapApiMatches.return) {
        tempArr.push('')
        tempArr.push('## 返回')
        tempArr.push('')

        tempArr.push('|类型|说明|')
        tempArr.push('|----|----|')
        const str = mapApiMatches.return
        const fieldNameWrapper = str.match(/[{[][a-zA-Z\s?:,|<>$.]+[}\]]/)?.[0]
        const fieldType = fieldNameWrapper.match(/(?<=[{[])[a-zA-Z\s?:,|<>]+(?=[}\]])/)?.[0]
        const note = str.split(fieldNameWrapper)[1].replace(/(^\s+)|(\s+$)/, '')
        tempArr.push(`|\`${fieldType}\`|${note}|`)
      }

      if (mapApiMatches.example) {
        tempArr.push('')
        tempArr.push('## 举例')
        tempArr.push('')

        tempArr.push(mapApiMatches.example)
      }

      if (fse.pathExistsSync(pathTestFile)) {
        tempArr.push('')
        tempArr.push('## 测试用例')
        tempArr.push('')

        tempArr.push('```typescript')
        const contentTestFile = fse.readFileSync(pathTestFile, 'utf8')
        tempArr.push(contentTestFile)
        tempArr.push('```')
      }

      tempArr.push('')

      // 对所有二级标题，依次添加中文序号：一、二、三、四、五等
      const arrOrderText = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
      let orderIdx = 0
      tempArr.forEach((arrItem, arrItemIdx) => {
        if (/^##\s/.test(arrItem)) {
          tempArr[arrItemIdx] = arrItem.replace(/^##\s/, `## ${arrOrderText[orderIdx]}、`)
          orderIdx += 1
        }
      })

      return tempArr.join('\n')
    })()
    fse.outputFileSync(path.join(__dirname, `../docs/${outFilePathAndName}.md`), fileContent)
  })

  // 将README.md拷贝到docs目录下
  fse.copySync(path.join(pathRoot, 'README.md'), path.join(pathDocs, 'index.md'))
  const readMeContent = fse.readFileSync(path.join(pathDocs, 'index.md'), 'utf8')
  fse.outputFileSync(path.join(pathDocs, 'index.md'), readMeContent)

  // 将CHANGELOG.md拷贝到docs目录下，并更名为changelog.md
  fse.copySync(path.join(pathRoot, 'CHANGELOG.md'), path.join(pathDocs, 'changelog.md'))

  // 将CONTRIBUTING.md拷贝到docs目录下，并更名为contributing.md
  fse.copySync(path.join(pathRoot, 'CONTRIBUTING.md'), path.join(pathDocs, 'contributing.md'))

  const content = fse.readFileSync(pathRawVitePressConfig, 'utf8')
    .replace('sidebar: [],', `sidebar: ${JSON.stringify(sidebar, null, 2)},`)
  fse.outputFileSync(pathVitePressConfig, content)

  // eslint-disable-next-line no-console
  console.log('结束：解析代码，生成markdown文档')
}

module.exports = {
  generateDocs
}
