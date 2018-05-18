# utils-daily

<br />

<p align="center">
  <a href="#" rel="noopener noreferrer">
    <img width="429" src="https://github.com/Yakima-Teng/utils-daily/raw/master/assets/logo.png" alt="utils-daily.js">
  </a>
</p>

<p align="center"> Light <b>3kb</b> library including a collection of frontend utility functions used in daily work</p>

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
* 🔥 3kb after gzipped (use `rollup.js` with the technology called `tree-shaking`)
* 🔥 All browsers supported
* 🔥 Use flow to do the type check work
* 🔥 Use eslint to lint code
* 🔥 Use jasmine to do unit test


## Usage

### Via `script` tag in html

```html
<script src="./dist/libs-utils.min.js"></script>
```

### Via npm

First, install it:

```bash
npm i -S utils-daily
```

Then import it:

```javascript
// import while library and use the method you like
import utils from 'utils-daily'
utils.getType(123) // 'number'

// or if you only want to import specified function
import getType from 'utils-daily/getType'
getType(123) // 'number'
```


## Open Source

Source code is hoisted in Github: [utils-daily](https://github.com/Yakima-Teng/utils-daily).

Pull requests are welcome. If you want to add a new function called `tryIt`, you should create a file `tryIt.js` under the root directory with appropriate comment, and then update the `Summary.md`. Common commands:
- `npm run generateIndexJSAndBuild`: build the library file.

- `npm run docs:generateSummary`: update `docs/SUMMARY.md`.

- `npm run docs:dev`: see documentation locally for easy development.

- `npm run deploy`: deploy documentation files to both the `gh-pages` branch and your own server.


## License

[MIT](./LICENSE)
