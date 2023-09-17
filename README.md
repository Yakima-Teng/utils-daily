# utils-daily.js

<br />

<p align="center">
  <a href="#" rel="noopener noreferrer">
    <img width="300" src="https://github.com/Yakima-Teng/utils-daily/raw/master/assets/logo.png" alt="utils-daily.js">
  </a>
</p>

<p align="center">前端开发<b>常用函数库</b>。</p>

<p align="center" style="display: flex;align-items: center;justify-content: center;">
  <a href="https://npmcharts.com/compare/utils-daily?minimal=true">
    <img src="https://img.shields.io/npm/dm/utils-daily.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/utils-daily">
    <img src="https://img.shields.io/npm/v/utils-daily.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/utils-daily">
    <img src="https://img.shields.io/npm/l/utils-daily.svg" alt="License">
  </a>
</p>

> 一个简单实用的常用函数库，用于日常开发。

* 🔥 自动生成的[API文档](https://yakima-teng.github.io/utils-daily/)
* 🔥 用`rollup`的`tree-shaking`特性来尽可能减少文件体积。
* 🔥 用`typescript`进行类型检查
* 🔥 用`eslint`进行代码风格检查
* 🔥 用`jest`进行单元测试

## 使用

### 方法1：通过HTML的script标签

```html
<script src="https://cdn.jsdelivr.net/npm/utils-daily@0.0.14/dist/utils-daily.min.js"></script>
<script>
  console.log(u.getType('')) // 'string'
</script>
```

### 方法2：通过npm

安装依赖：

```bash
npm i -S utils-daily
```

引入：

```javascript
// 引入整个库
import u from 'utils-daily'
u.getType(123) // 'number'

// 或者引入具体的方法
import { getType } from 'utils-daily'
getType(123) // 'number'
```

## 开源

本函数库源码托管于Github：[https://github.com/Yakima-Teng/utils-daily](https://github.com/Yakima-Teng/utils-daily)。

## 许可协议

MIT LICENSE

## 发版常用命令

```bash
npm --registry=https://registry.npmjs.org login
npm --registry=https://registry.npmjs.org publish
```
