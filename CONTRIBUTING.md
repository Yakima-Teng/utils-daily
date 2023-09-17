# 贡献代码

- 请抱着认真细致的态度来贡献代码。
- 如果只是随意试试或者测试，请在本地尝试，不要提交代码。

## 分支

* 分支需与版本号对应。如0.0.2版本对应0.0.2分支。

## 代码风格检测

* 代码必须要通过lint检测（`npm run lint`不报错）。
* 遇到lint报错或警告，首先应尝试解决问题，而不是添加类似`// eslint-disable-next-line`等注释来逃避问题。

## 测试用例

* 添加新方法后务必在`./test`目录下按`./src`路径下相似的相对路径添加对应的测试用例。
* 代码必须要通过所有测试用例（`npm run test`不报错）。

## 方法库大小

* 不要随意添加会使方法库变得很大的方法。
* 有些第三方方法因为比较成熟，会考虑很多场景，所以方法会很大，但是平常在实际业务场景中我们并不需要考虑那么多因素，所以只需要有一个可以用的方法即可。

## 发布历史

* 做了修改后务必同步更新`./CHANGELOG.md`文件。
* 最新的版本记录内容放置于`./CHANGELOG.md`文件的最上方。

## 类型声明

* 务必同步更新`./types/utils-daily.d.ts`中的类型声明。

## 方法注释

* 请参考现有方法的注释进行填写。
* `@since`是必须写的，表示该方法从哪个版本开始可用。
* 添加了`@apiAnalyze`注释的方法才会生成到接口文档中。
* 一个文件中只可以有一个`@apiAnalyze`注释。