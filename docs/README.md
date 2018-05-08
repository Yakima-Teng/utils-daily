# Introduction

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
import utils from 'utils-daily'
```


## Features

- Online documetation is available: [utils-daily](http://www.lookmaths.com/) or [utils-daily on github pages](https://yakima-teng.github.io/utils-daily/).

- Use `rollup.js` with the technology called `tree-shaking` in order to make the size of the generated library file as small as possible.

- use flow and eslint to test code.


## Development

Source code is hoisted in Github: [utils-daily](https://github.com/Yakima-Teng/utils-daily).

If you want to add a new function called `tryIt`, you should create a file `tryIt.js` under the root directory with appropriate comment. Common commands:

- `npm run generateIndexJSAndBuild`: build the library file.

- `npm run docs:generateSummary`: update `docs/SUMMARY.md`.

- `npm run docs:dev`: see documentation locally for easy development.

- `npm run deploy`: deploy documentation files to both the `gh-pages` branch and your own server.

## License

[MIT](./LICENSE)
