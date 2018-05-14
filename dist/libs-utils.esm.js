
/**
 * utils-daily v0.0.6
 * (c) 2018 Yakima Teng
 * Source code: https://github.com/Yakima-Teng/utils-daily
 * @license MIT
 */

// 

/**
 * Judge whether a variable is valuable
 * - ''、null、'null'、undefined、'undefined' is regarded as invaluable
 * - number 0 is regarded as valuable
 * @param val variable
 * @returns {boolean} whether a variable is valuable
 */
function hasValue (val) {
  return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined'
}

// 

/**
 * Calculate sum of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} sum of these numbers
 */
function add (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatAdd(preVal, curVal)
  }, 0);
  return hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result)
}

/**
 * Add two number
 * @ignore
 * @param  {number} a        number a
 * @param  {number} b        number b
 * @return {number}    sum of number a and number b
 */
function floatAdd (a, b) {
  var numOfDecimalPlacesInA;
  var numOfDecimalPlacesInB;
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInA = 0;
  }
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInB = 0;
  }
  var m = Math.pow(10, Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB));
  return (a * m + b * m) / m
}

// 

/**
 * Clear all localStorage items
 */
function clearLocalStorage () {
  window.localStorage.clear();
}

// 

/**
 * fill a string or number to specified length with specified symbol from left on
 * @param val {string|number}
 * @param len {number} target length after filling
 * @param symbol {string} used to fill string/number
 * @returns {string} string after filling
 */
function fillLeft (val, len, symbol) {
  if ( symbol === void 0 ) symbol = '0';

  val = '' + val;
  var diffInLength = len - val.length;
  if (diffInLength > 0) {
    for (var i = 0; i < diffInLength; i++) {
      val = symbol + val;
    }
  }
  return val
}

// 

/**
 * Make a number less than 10 to be prefixed with an '0'
 * - the same as `fillLeft(m, 2, '0')`
 * @param num {string|number} a number, or number in string format (number should be integer)
 * @returns {string} string after prefixed with '0' is less than 10
 */
function toDouble (num) {
  return fillLeft(num, 2, '0')
}

// 

/**
 * Transform a date object to string in format like `YYYY-MM-DD`
 * @param date the date object
 * @returns {string} string in format like `YYYY-MM-DD`
 */
function dateToShortString (date) {
  if ( date === void 0 ) date = new Date();

  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  return (y + "-" + (toDouble(m)) + "-" + (toDouble(d)))
}

// 

/**
 * Transform a date object to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param date date object
 * @returns {string}  string in format like `YYYY-MM-DD hh:mm:ss`
 */
function dateToLongString (date) {
  if ( date === void 0 ) date = new Date();

  var hour = toDouble(date.getHours());
  var minute = toDouble(date.getMinutes());
  var second = toDouble(date.getSeconds());
  return dateToShortString(date) + " " + hour + ":" + minute + ":" + second
}

// 

/**
 * Calculate quotient of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} quotient of these numbers (number of decimal places not larger than 10)
 */
function divide (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatDivide(preVal, curVal)
  });
  return hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result)
}

/**
 * Divide number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   quotient of number a divided by number b
 */
function floatDivide (a, b) {
  var numOfDecimalPlacesInA = 0;
  var numOfDecimalPlacesInB = 0;
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length;
  } catch (e) {}
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length;
  } catch (e) {}
  var newA = Number(a.toString().replace('.', ''));
  var newB = Number(b.toString().replace('.', ''));
  return (newA / newB) * Math.pow(10, numOfDecimalPlacesInB - numOfDecimalPlacesInA)
}

// 

/**
 * Return Wechat redirect Url where Wechat will pass code query parameter to us
 * @param appId {string} appId for the Wechat account
 * @param targetUrl {string} entire url including the preceding `http` or `https`
 * @returns {string}
 */
function generateWechatRedirectUrl (appId, targetUrl) {
  if (/(^http)|(^https)/.test(targetUrl)) {
    var encodedUrl = encodeURIComponent(targetUrl);
    return ("https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + encodedUrl + "&response_type=code&scope=snsapi_base&state=1#wechat_redirect")
  } else {
    throw new Error('parameter targetUrl for function generateWechatRedirectUrl should be preceding with `http` or `https`')
  }
}

// 

/**
 * Get value of the cookie item of specified name
 * @param name name of the cookie item
 * @returns {string} value of the cookie item
 */
function getCookie (name) {
  if (document.cookie.length > 0) {
    var start = document.cookie.indexOf(name + '=');
    if (start !== -1) {
      start = start + name.length + 1;
      var end = document.cookie.indexOf(';', start);
      if (end === -1) {
        end = document.cookie.length;
      }
      return window.decodeURI(document.cookie.substring(start, end))
    }
    return ''
  }
  return ''
}

// 
/**
 * Get the value of localStorage item of specified key/name
 * @param key the specified key/name of the storage item
 * @returns {object | null} value of localStorage item
 */
function getLocalStorage (key) {
  if ('localStorage' in window) {
    return window.localStorage.getItem(key) ? JSON.parse(window.decodeURI(window.localStorage.getItem(key))) : null
  } else {
    throw new Error('localStorage is not supported!')
  }
}

// 

/**
 * Get value of specified query parameter in specified url
 * @param {string} url the url, usually got from window.location.href
 * @param key the parameter
 * @returns {string} the value of specified query parameter
 */
function getQueryValue (url, key) {
  var search = url.indexOf('?') !== -1 ? url.replace(/^.*\?/, '') : '';
  if (!search) {
    return ''
  }
  var items = search.split('&') || [];
  for (var i = 0, len = items.length; i < len; i++) {
    var item = items[i];
    if (item.split('=')[0] === key) {
      return item.split('=')[1] || ''
    }
  }
  return ''
}

// 

/**
 * Get date string of calculating specific date with specific difference in year, month, date, hours, minutes and seconds
 * @param dat {Date} date object used as the base for calculation
 * @param yDiff {number} difference in year, negative value is acceptable
 * @param mDiff {number} difference in month, negative value is acceptable
 * @param dDiff {number} difference in date, negative value is acceptable
 * @param [hDiff] {number} difference in hours, negative value is acceptable; optional, but if defined, `miDiff` and `sDiff` should also be defined
 * @param [miDiff] {number} difference in minutes, negative value is acceptable; optional, but if defined, `hDiff` and `sDiff` should also be defined
 * @param [sDiff] {number} difference in seconds, negative value is acceptable; optional, but if defined, `hDiff` and `miDiff` should also be defined
 * @returns {string} date string in format of `yyyy-mm-dd` or `yyyy-mm-dd hh:mm:ss`
 */
function getRelativeDateString (
  dat,
  yDiff,
  mDiff,
  dDiff,
  hDiff,
  miDiff,
  sDiff
) {
  if ( dat === void 0 ) dat = new Date();
  if ( yDiff === void 0 ) yDiff = 0;
  if ( mDiff === void 0 ) mDiff = 0;
  if ( dDiff === void 0 ) dDiff = 0;
  if ( hDiff === void 0 ) hDiff = 0;
  if ( miDiff === void 0 ) miDiff = 0;
  if ( sDiff === void 0 ) sDiff = 0;

  // clone the dat object first, avoid change of the dat object
  var date = new Date(+dat);
  date.setFullYear(date.getFullYear() + yDiff);
  date.setMonth(date.getMonth() + mDiff);
  date.setDate(date.getDate() + dDiff);
  date.setHours(date.getHours() + hDiff);
  date.setMinutes(date.getMinutes() + miDiff);
  date.setSeconds(date.getSeconds() + sDiff);
  var y = date.getFullYear();
  var m = toDouble(date.getMonth() + 1);
  var d = toDouble(date.getDate());
  if (arguments.length === 4) {
    return (y + "-" + m + "-" + d)
  } else if (arguments.length === 7) {
    var h = toDouble(date.getHours());
    var mi = toDouble(date.getMinutes());
    var s = toDouble(date.getSeconds());
    return (y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s)
  } else {
    throw new Error('length of arguments for function getRelativeDateString should be either 4 or 7')
  }
}

// 

/**
 * Get value of sessionStorage item specified the key
 * @param key {string} the name of the sessionStorage item
 * @returns {object | null} value of sessionStorage item
 */
function getSessionStorage (key) {
  return window.sessionStorage.getItem(key) ? JSON.parse(window.decodeURI(window.sessionStorage.getItem(key))) : null
}

// 

/**
 * Get the type of a variable
 * @param val {any} the variable
 * @returns {string} 'array', 'object', 'function', 'null', 'undefined', 'string', 'number', 'boolean', 'date', 'regexp' and etc.
 */
function getType (val) {
  return ({}).toString.call(val).slice(8, -1).toLowerCase()
}

// 

/**
 * Serialize params from object to string
 * @example serializeParams({ a: 3, b: 4 }) => 'a=3&b=4'
 * @param params an object of key:value pairs
 * @returns {string} serialized params in string format
 */
function serializeParams (params) {
  var str = '';
  for (var p in params) {
    if (params.hasOwnProperty(p)) {
      str += '&' + p + '=' + params[p];
    }
  }
  return str.replace(/^&/, '')
}

// 

/**
 * Go to specified path with specified query parameters
 * @param path {string} the target path to go to
 * @param query {object} the target query parameter in format of object containing key:value pairs
 */
function goPage (path, query) {
  window.location.href = path + (query ? ('?' + serializeParams(query)) : '');
}

// 

/**
 * Judge whether the OS of current device is iOS
 * @returns {boolean} whether the OS of current device is iOS
 */
function isIOS () {
  return (/iphone/i).test(window.navigator.userAgent.toLowerCase())
}

// 
/**
 * Transform string in format like `YYYY-MM-DD hh:mm:ss` to date object
 * @param dateString string in format like `YYYY-MM-DD hh:mm:ss`
 * @returns {Date} date object
 */
function longStringToDate (dateString) {
  if (dateString && dateString.length === 19) {
    // Attention: there is a space between regular expression
    var tempArr = dateString.split(/[- :]/);
    // 部分IOS设备中new Date('yyyy-mm-dd hh:mm:ss')不会生成日期对象，如下这般处理适用于所有设备
    return new Date(parseInt(tempArr[0], 10), parseInt(tempArr[1], 10) - 1, parseInt(tempArr[2], 10), parseInt(tempArr[3], 10), parseInt(tempArr[4], 10), parseInt(tempArr[5], 10))
  }
  throw new Error('not valid parameter for function longStringToDate')
}

// 

/**
 * Merge properties of object B to object A
 * - This will change object A
 * @param objA {object} object A
 * @param objB {object} object B
 * @returns {object} object A after merging
 */
function merge (objA, objB) {
  if (objA && objB) {
    for (var p in objB) {
      if (objB.hasOwnProperty(p)) {
        if (getType(objA[p]) === 'object' && getType(objB[p]) === 'object') {
          merge(objA[p], objB[p]);
        } else {
          objA[p] = objB[p];
        }
      }
    }
  }
  return objA
}

// 

/**
 * Calculate sum of members in an Array
 * @param  {Array<number>} arr an array of numbers
 * @param  {number} numOfDecimalPlaces number of decimal places to leave; determined automatically if not provided
 * @return {string}  sum of these numbers
 */
function multiply (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatMultiply(preVal, curVal)
  });
  return hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result)
}

/**
 * Multiply two number
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   product of number a and number b
 */
function floatMultiply (a, b) {
  var m = 0;
  var strA = a.toString();
  var strB = b.toString();
  try {
    m += strA.split('.')[1].length;
  } catch (e) {}
  try {
    m += strB.split('.')[1].length;
  } catch (e) {}
  return Number(strA.replace('.', '')) * Number(strB.replace('.', '')) / Math.pow(10, m)
}

// 

/**
 * Remove the localStorage item of specified key/name
 * @param key the key/name of the localStorage item to remove
 */
function removeLocalStorage (key) {
  window.localStorage.removeItem(key);
}

// 

/**
 * Set cookie
 * @param name the key/name of the cookie item
 * @param val the value of the cookit item
 * @param expireDays [optional] if set, the cookie item will be outdated after the specified number of days
 */
function setCookie (name, val, expireDays) {
  if ( expireDays === void 0 ) expireDays = 0;

  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + expireDays);
  window.document.cookie = name + '=' + window.encodeURI(val) + (expireDays ? ';expires=' + expireDate.toUTCString() : '');
}

// 

/**
 * Save a key:value pair in localStorage
 * - the value should itself be an object of key:value pairs
 * @param key {string} the key of the storage item
 * @param val {object} the value of the storage item
 */
function setLocalStorage (key, val) {
  if ('localStorage' in window) {
    try {
      window.localStorage.setItem(key, window.encodeURI(JSON.stringify(val)));
    } catch (e) {
      if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        throw new Error('localStorage limit exceeds!')
      } else {
        throw e
      }
    }
  } else {
    throw new Error('localStorage API is not supported!')
  }
}

// 

/**
 * Set a key:value pair in sessionStorage
 * @param key the key of the sessionStorage item
 * @param val the value of the sessionStorage item, itself should be an object of key:value pairs
 */
function setSessionStorage (key, val) {
  window.sessionStorage.setItem(key, window.encodeURI(JSON.stringify(val)));
}

// 

/**
 * Transform string in format like `YYYY-MM-DD` to date object
 * `00:00:00 is used due to hours, minutes and seconds not specified`
 * @param dateString string in format like `YYYY-MM-DD`
 * @returns {Date} date object
 */
function shortStringToDate (dateString) {
  if (dateString && dateString.length === 10) {
    return longStringToDate(dateString + ' 00:00:00')
  }
  throw new Error('invalid parameter for function shortStringToDate')
}

// 

/**
 * Calculate difference of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} difference of these numbers
 */
function subtract (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatSubtract(parseFloat(preVal), parseFloat(curVal))
  });
  return hasValue(numOfDecimalPlaces) ? parseFloat(result).toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test(result) ? parseFloat(result).toFixed(10) : result)
}

/**
 * Subtract number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {string} difference between a and b, in string format with automatical precision
 */
function floatSubtract (a, b) {
  var numOfDecimalPlacesInA;
  var numOfDecimalPlacesInB;
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInA = 0;
  }
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInB = 0;
  }
  var m = Math.pow(10, Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB));
  // 动态控制精度长度
  var automaticPrecisionForDecimalPlaces = (numOfDecimalPlacesInA >= numOfDecimalPlacesInB) ? numOfDecimalPlacesInA : numOfDecimalPlacesInB;
  return ((a * m - b * m) / m).toFixed(automaticPrecisionForDecimalPlaces)
}

// 

/**
 * Transform timestamp to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param ts {number} timestamp
 * @returns {string}
 */
function timestampToLongString (ts) {
  return dateToLongString(new Date(ts))
}

// 

/**
 * Transform timestamp to string in format like `YYYY-MM-DD`
 * @param ts timestamp
 * @returns {string}
 */
function timestampToShortString (ts) {
  return dateToShortString(new Date(ts))
}

// 

/**
 * Validate whether the car plate number is valid
 * - This method is only available in China
 * - The validation method is copied from http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @param plateNo the car plate number
 * @returns {boolean} whether the car plate number is valid
 */
function validateCarPlate (plateNo) {
  /**
   * @ignore
   * 普通汽车
   * 车牌号格式：汉字 + A-Z + 5位A-Z或0-9(  车牌号不存在字母I和O防止和1、0混淆)
   */
  var reNormalVehicle = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/;

  /**
   * @ignore
   * 新能源号码车牌编码规则
   *
   * 新能源汽车号牌号码增加一位，与普通汽车号牌相比，
   * 新能源汽车号牌号码由5位升为6位，号牌号码容量增大、资源更加丰富，
   * 可以满足“少使用字母、多使用数字”的编排需要。
   *
   * 具体编码规则是省份简称（1位汉字）+发牌机关代号（1位字母）+序号（6位）。
   *
   * - 小型新能源汽车号牌的第一位必须使用字母D、F（D代表纯电动新能源汽车，F代表非纯电动新能源汽车），
   * 第二位可以使用字母或者数字，后四位必须使用数字。
   *
   * - 大型新能源汽车号牌的第六位必须使用字母D、F（D代表纯电动新能源汽车，F代表非纯电动新能源汽车），
   * 前五位必须使用数字。
   *
   * 序号中英文字母I和O不能使用。
   */
  var reNewEngineVehicle = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z](([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/;

  return reNormalVehicle.test(plateNo) || reNewEngineVehicle.test(plateNo)
}

// 

/**
 * Validate the accuracy of a ID card number
 * - This function is only available for Chinese
 * @param idCardNo {string} ID card number
 * @returns {boolean} whether the ID card number is valid
 */
function validateIdCardNo (idCardNo) {
  var ID = '' + idCardNo;
  if (/^[1-9][0-9]{16}([0-9]|[xX])$/.test(ID)) {
    if (checkDate(ID)) {
      // turn ID to an array
      var arrID = ID.split('');
      // factors for 1st-17st ID digits
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
      // the check code for the 18th digit in the ID number
      var checkCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      // if the 18th digit is the letter X (or x), change it to be the digit 10
      if (arrID[17].toLowerCase() === 'x') {
        arrID[17] = '10';
      }
      arrID = arrID.map(function (item) { return parseInt(item, 10); });
      // multiply first 17 ID digits by corresponding factor elements, and sum these results
      for (var i = 16; i >= 0; i--) {
        sum += arrID[i] * factor[i];
      }
      // let remainder = sum % 11
      return parseInt(arrID[17]) === checkCode[sum % 11]
    }
    return false
  } else if (/^[1-9][0-9]{14}$/.test(ID)) {
    return checkDate(ID)
  } else {
    return false
  }
}

/**
 * validate date part in ID card number
 * @ignore
 * @param ID {string} ID card number
 * @returns {boolean} whether date part in ID card number is valid
 */
function checkDate (ID) {
  var year, month, day, tempDate;
  var length18Or15 = ID.length;
  if (length18Or15 === 18) {
    year = ID.substring(6, 10);
    month = ID.substring(10, 12);
    day = ID.substring(12, 14);
    // with parseInt, 05 will be 5
    tempDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return !(tempDate.getFullYear() !== parseInt(year) || tempDate.getMonth() !== parseInt(month) - 1 || tempDate.getDate() !== parseInt(day))
  } else if (length18Or15 === 15) {
    year = ID.substring(6, 8);
    month = ID.substring(8, 10);
    day = ID.substring(10, 12);
    // with parseInt, 05 will be 5
    tempDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    // .getYear() is not recommended for use any longer,
    // so here getFullYear() is used although it may seem not simple enough
    return !(('' + tempDate.getFullYear()).substring(2) !== '' + parseInt(year) || tempDate.getMonth() !== parseInt(month) - 1 || tempDate.getDate() !== parseInt(day))
  } else {
    return false
  }
}

// 

/**
 * Judge whether it's a valid phone number
 * - This function is only available for Chinese cars
 * - The regular expression is copied from webpage: http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @param phone {string} phone number
 * @returns {boolean} whether it's a valid phone number
 */
function validatePhone (phone) {
  return /^13[0-9]{9}|15[0-9][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|145[0-9]{8}|17[0-9]{9}$/.test(phone)
}

// this file is generated by gulp task ^_^

var index = {
  add: add,
  clearLocalStorage: clearLocalStorage,
  dateToLongString: dateToLongString,
  dateToShortString: dateToShortString,
  divide: divide,
  fillLeft: fillLeft,
  generateWechatRedirectUrl: generateWechatRedirectUrl,
  getCookie: getCookie,
  getLocalStorage: getLocalStorage,
  getQueryValue: getQueryValue,
  getRelativeDateString: getRelativeDateString,
  getSessionStorage: getSessionStorage,
  getType: getType,
  goPage: goPage,
  hasValue: hasValue,
  isIOS: isIOS,
  longStringToDate: longStringToDate,
  merge: merge,
  multiply: multiply,
  removeLocalStorage: removeLocalStorage,
  setCookie: setCookie,
  setLocalStorage: setLocalStorage,
  setSessionStorage: setSessionStorage,
  shortStringToDate: shortStringToDate,
  subtract: subtract,
  timestampToLongString: timestampToLongString,
  timestampToShortString: timestampToShortString,
  toDouble: toDouble,
  validateCarPlate: validateCarPlate,
  validateIdCardNo: validateIdCardNo,
  validatePhone: validatePhone
}

export default index;
