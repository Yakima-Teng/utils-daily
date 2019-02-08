# 常用开发命令说明

## `npm run start`

在编写js函数时，按照[http://usejsdoc.org/about-getting-started.html#adding-documentation-comments-to-your-code](http://usejsdoc.org/about-getting-started.html#adding-documentation-comments-to-your-code)的规则书写函数注释，然后运行`npm run start`即可查看生成的文档。

## `npm run build`

在`dist`目录下生成4中函数库文件：

* `utils-daily.common.js`：符合CommonJS规范的文件（所有函数统一通过`module.exports`导出）；
* `utils-daily.esm.js`：符合ES Module规范的文件（所有函数统一通过`export default`导出）；
* `utils-daily.js`：以同时支持CommonJS、AMD、全局变量（`window.u`）的方式导出；
* `utils-daily.min.js`：`utils-daily.js`文件的压缩版，生产环境通过script标签引入代码的话推荐使用该文件。

## `npm run lint`

使用`eslint`（`standard`）检测代码风格。

## `npm run flow`

使用`flow`进行类型检查。

## `npm run test`

使用`jasmine`对函数进行单元测试。

## `npm run example`

使用`webpack`开启本地web服务，访问HTML后可直接在控台台中通过全局的`u`变量来自测所撰写的函数的效果。

## `npm run docs:deploy`

将文档发布到`gh-pages`分支，方便其他人在线访问。
