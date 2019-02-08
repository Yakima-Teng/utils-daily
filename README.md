# utils-daily

<br />

<p align="center">
  <a href="#" rel="noopener noreferrer">
    <img width="300" src="https://github.com/Yakima-Teng/utils-daily/raw/master/assets/logo.png" alt="utils-daily.js">
  </a>
</p>

<p align="center"><b>4kb(gzip压缩后)</b>轻量级前端开发常用函数库。</p>

<p align="center">
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

> 一个简单实用的轻量级函数库，用于日常开发。你可以fork该库来实现一套你自己常用的函数库。

* 🔥 自动生成的[API文档](https://yakima-teng.github.io/utils-daily/)
* 🔥 用`rollup`的`tree-shaking`特性来尽可能减少文件体积：gzip压缩后只有4kb
* 🔥 用`flow`进行类型检查
* 🔥 用`eslint`进行代码风格检查
* 🔥 用`jasmine`进行单元测试

## 使用

### 方法1：通过HTML的script标签

```html
<script src="https://cdn.jsdelivr.net/npm/utils-daily@0.0.13/dist/utils-daily.min.js"></script>
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

大概率你并不需要使用这个库，但是你可以fork该库后在现有架构下开发你自己的常用函数库，如果是这样，你可以阅读[常用开发命令说明](./DEVELOP_GUIDE.md)。

## 许可协议

[MIT](./LICENSE)
