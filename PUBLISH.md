## 发版步骤

1、先更新项目根目录下的CHANGELOG.md（填写了版本号和更新内容），保存后先不要关闭文件（后面需要复制内容）。

2、执行`npm run release`。提示输入version时输入第1步中填写的版本号。提示输入commit comment时提示输入第1步中填写的更新内容。

3、关闭CHANGELOG.md。发版结束。

### 说明

如果提示没登录的话，执行下面的命令登录即可。

```bash
npm --registry=https://registry.npmjs.org login
```
