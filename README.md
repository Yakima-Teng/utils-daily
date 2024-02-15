# utils-daily

[中文文档](./README_zh-CN.md)

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

> Utils functions for daily frontend coding.

* 🔥 Size is minimized by `tree-shaking` ability from `rollup`
* 🔥 Support `TypeScript`
* 🔥 Code style is kept by `eslint`
* 🔥 Code quality is kept by unit test (`jest`)

## Document

We have a detailed online [api document](https://yakima-teng.github.io/utils-daily/).

## Usage

### Usage 1: use HTML Script tag

```html
<script src="https://cdn.jsdelivr.net/npm/utils-daily@1.0.5/dist/library/utils-daily.min.js"></script>
<script>
  console.log(u.add([1, 2, 3, 4])) // '10'
</script>
```

### Usage 2: use npm

Install:

```bash
npm i -S utils-daily
```

Use:

```javascript
// directly import functions you need
import { add } from 'utils-daily'
add([1, 2, 3, 4]) // '10'
```

## Open source

This project is open sourced, and you can see code in Github: [https://github.com/Yakima-Teng/utils-daily](https://github.com/Yakima-Teng/utils-daily)。

## License

MIT LICENSE
