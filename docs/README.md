---
description: A light library including a collection of frontend utility functions used in daily work
---

<br />

<p align="center">
  <a href="#" rel="noopener noreferrer">
    <img width="300" src="https://github.com/Yakima-Teng/utils-daily/raw/master/assets/logo.png" alt="utils-daily.js">
  </a>
</p>

<p align="center"> Light <b>4kb-after-gzipped</b> library including a collection of frontend utility functions used in daily work</p>

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

> A simple yet useful frontend utility library for use in daily work. If you find it useful, you can fork it and change the content until it meet the requirements in your daily work.


* 🔥 Detailed online documentation: [utils-daily](http://www.lookmaths.com/)
* 🔥 4kb after gzipped (use `rollup.js` with the technology called `tree-shaking`)
* 🔥 All browsers supported
* 🔥 Use flow to do the type check work
* 🔥 Use eslint to lint code
* 🔥 Use jasmine to do unit test


## Usage

### Via `script` tag in html

```html
<script src="https://cdn.jsdelivr.net/npm/utils-daily@0.0.10/dist/utils-daily.min.js"></script>
<script>
  console.log(u.getType('')) // 'string'
</script>
```

### Via npm

First, install it:

```bash
npm i -S utils-daily
```

Then import it:

```javascript
// import while library and use the method you like
import u from 'utils-daily'
u.getType(123) // 'number'

// or if you only want to import specified function
import getType from 'utils-daily/getType'
getType(123) // 'number'
```


## Open Source

Source code is hoisted in Github: [Yakima-Teng/utils-daily](https://github.com/Yakima-Teng/utils-daily).

Pull requests are welcome ^_^.


## License

[MIT](./LICENSE)
