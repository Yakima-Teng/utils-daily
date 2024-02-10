# utils-daily

[English document](./README.md)

<br />

<p align="center">
  <a href="#" rel="noopener noreferrer">
    <img width="300" src="https://github.com/Yakima-Teng/utils-daily/raw/master/assets/logo.png" alt="utils-daily.js">
  </a>
</p>

<p align="center" style="display: flex;align-items: center;justify-content: center;gap:8px;">
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

> 一个简单实用的常用函数库，用于前端日常开发。

* 🔥 用`rollup`的`tree-shaking`特性来尽可能减少文件体积。
* 🔥 支持`TypeScript`
* 🔥 用`eslint`进行代码风格检查
* 🔥 用`jest`进行单元测试

## 文档

该库配有详细的接口文档，具体见：[接口文档](https://yakima-teng.github.io/utils-daily/)。

## 使用

### 方法1：通过HTML的script标签

```html
<!-- 1.0.1是版本号，需要换成你自己需要的版本，一般换成最新版本 -->
<script src="https://cdn.jsdelivr.net/npm/utils-daily@1.0.1/dist/library/utils-daily.min.js"></script>
<script>
  console.log(u.add([1, 2, 3, 4])) // '10'
</script>
```

### 方法2：通过npm

安装依赖：

```bash
npm i -S utils-daily
```

引入：

```javascript
// 按需引入具体的方法
import { add } from 'utils-daily'
add([1, 2, 3, 4]) // '10'
```

## 开源

本函数库源码托管于Github：[https://github.com/Yakima-Teng/utils-daily](https://github.com/Yakima-Teng/utils-daily)。

## 许可协议

MIT
