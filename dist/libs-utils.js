
/**
 * utils-daily v0.0.3
 * (c) 2018 Yakima Teng
 * Source code: https://github.com/Yakima-Teng/utils-daily
 * @license MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.$utils = factory());
}(this, (function () { 'use strict';

  /**
   * Clear all localStorage items
   */
  function clearLocalStorage () {
    window.localStorage.clear();
  }

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

  /**
   * Make a number less than 10 to be prefixed with an '0'
   * - the same as `fillLeft(m, 2, '0')`
   * @param num {string|number} a number, or number in string format
   * @returns {string} string after prefixed with '0' is less than 10
   */
  function toDouble (num) {
    return fillLeft(num, 2, '0')
  }

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

  /**
   * Get value of specified query parameter
   * @param key the parameter
   * @returns {string} the value of specified query parameter
   */
  function getQueryValue (key) {
    var search = location.href.indexOf('?') !== -1 ? location.href.replace(/^.*\?/, '') : '';
    if (!search) {
      return ''
    }
    var items = search.split('&') || [];
    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];
      if (item.split('=')[0] === key) {
        return item.split('=')[1]
      }
    }
    return ''
  }

  /**
   * Get value of sessionStorage item specified the key
   * @param key
   * @returns {object | null} value of sessionStorage item
   */
  function getSessionStorage (key) {
    return window.sessionStorage.getItem(key) ? JSON.parse(window.decodeURI(window.sessionStorage.getItem(key))) : null
  }

  /**
   * Get the type of a variable
   * @param val {any} the variable
   * @returns {string} 'array', 'object', 'function', 'null', 'undefined', 'string', 'number'
   */
  function getType (val) {
    return ({}).toString.call(input).slice(8, -1).toLowerCase()
  }

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

  /**
   * Go to specified path with specified query parameters
   * @param path {string} the target path to go to
   * @param query {object} the target query parameter in format of object containing key:value pairs
   */
  function goPage (path, query) {
    window.location.href = path + (query ? ('?' + serializeParams(query)) : '');
  }

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

  /**
   * Judge whether the OS of current device is iOS
   * @returns {boolean} whether the OS of current device is iOS
   */
  function isIOS () {
    return (/iphone/i).test(window.navigator.userAgent.toLowerCase())
  }

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
      return new Date(tempArr[0], tempArr[1] - 1, tempArr[2], tempArr[3], tempArr[4], tempArr[5])
    }
    throw new Error('not valid parameter for function longStringToDate')
  }

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

  /**
   * Remove the localStorage item of specified key/name
   * @param key the key/name of the localStorage item to remove
   */
  function removeLocalStorage (key) {
    window.localStorage.removeItem(key);
  }

  /**
   * Set cookie
   * @param name the key/name of the cookie item
   * @param val the value of the cookit item
   * @param expireDays [optional] if set, the cookie item will be outdated after the specified number of days
   */
  function setCookie (name, val, expireDays) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expireDays);
    window.document.cookie = name + '=' + window.encodeURI(val) + (expireDays ? ';expires=' + expireDate.toGMTString() : '');
  }

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

  /**
   * Set a key:value pair in sessionStorage
   * @param key the key of the sessionStorage item
   * @param val the value of the sessionStorage item, itself should be an object of key:value pairs
   */
  function setSessionStorage (key, val) {
    window.sessionStorage.setItem(key, window.encodeURI(JSON.stringify(val)));
  }

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

  /**
   * Transform timestamp to string in format like `YYYY-MM-DD hh:mm:ss`
   * @param ts timestamp
   * @returns {string}
   */
  function timestampToLongString (ts) {
    return dateToLongString(new Date(ts))
  }

  /**
   * Transform timestamp to string in format like `YYYY-MM-DD`
   * @param ts timestamp
   * @returns {string}
   */
  function timestampToShortString (ts) {
    return dateToShortString(new Date(ts))
  }

  /**
   * Validate whether the car plate number is valid
   * - The validation method is copied from http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
   * @param plateNo the car plate number
   * @returns {boolean} whether the car plate number is valid
   */
  function validateCarPlate (plateNo) {
    var per = /^[京津沪渝蒙新藏桂黑吉辽冀晋青鲁豫苏皖浙闽赣湘鄂粤琼甘陕川贵云宁]{1}[A-Z]{1}[A-Za-z0-9]{5,6}$/;
    var per1 = /^[京]{1}[A-Z]{1}[A-Za-z0-9]{5,6}$/;
    var per2 = /[`~!@#$%^&*()_+<>?:"{},.\\\/;'\[\]]/im;
    var fanti = /^[滬遼晉魯蘇閩贛粵瓊陝貴雲甯]{1}/;
    var per3 = /^[京]{1}[A-Z]{1}/;

    if (plateNo.charAt(0) === 'L' && plateNo.charAt(1) === 'S') {
      // 车牌号不能以LS开头
      return false;
    } else if (per2.test(plateNo) || fanti.test(plateNo)) {
      // 车牌号不能包含繁体字、特殊字符
      return false
    }
    if (per3.test(plateNo)) {
      // 如果是京开头的车牌则允许后面多一位车牌号（个性车牌）
      if (!per1.test(plateNo)) {
        return false
      }
    } else if (!per.test(plateNo)) {
      return false
    }
    return true
  }

  /**
   * Validate the accuracy of a ID card number
   * @param idCardNo {string} ID card number
   * @returns {boolean} whether the ID card number is valid
   */
  function validateIdCardNo (idCardNo) {
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
        return !(('' + tempDate.getFullYear()).substring(2) !== parseInt(year) || tempDate.getMonth() !== parseInt(month) - 1 || tempDate.getDate() !== parseInt(day))
      } else {
        console.log('Unknown error!');
        // return
      }
    }
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
          arrID[17] = 10;
        }
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
   * Judge whether it's a valid phone number
   * - This function is only available for Chinese cars
   * - The regular expression is copied from webpage: http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
   * @param phone phone number
   * @returns {boolean} whether it's a valid phone number
   */
  function validatePhone (phone) {
    return /^13[0-9]{9}|15[0-9][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|145[0-9]{8}|17[0-9]{9}$/.test(phone);
  }

  // this file is generated by gulp task ^_^

  var index = {
    clearLocalStorage: clearLocalStorage,
    dateToLongString: dateToLongString,
    dateToShortString: dateToShortString,
    fillLeft: fillLeft,
    getCookie: getCookie,
    getLocalStorage: getLocalStorage,
    getQueryValue: getQueryValue,
    getSessionStorage: getSessionStorage,
    getType: getType,
    goPage: goPage,
    hasValue: hasValue,
    isIOS: isIOS,
    longStringToDate: longStringToDate,
    merge: merge,
    removeLocalStorage: removeLocalStorage,
    setCookie: setCookie,
    setLocalStorage: setLocalStorage,
    setSessionStorage: setSessionStorage,
    shortStringToDate: shortStringToDate,
    timestampToLongString: timestampToLongString,
    timestampToShortString: timestampToShortString,
    toDouble: toDouble,
    validateCarPlate: validateCarPlate,
    validateIdCardNo: validateIdCardNo,
    validatePhone: validatePhone
  }

  return index;

})));
