
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
   * @returns {object | null}
   */
  function getLocalStorage (key) {
    if ('localStorage' in window) {
      return window.localStorage.getItem(key) ? JSON.parse(window.decodeURI(window.localStorage.getItem(key))) : null
    } else {
      throw new Error('localStorage is not supported!')
    }
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

  // this file is generated by gulp task ^_^

  var index = {
    getCookie: getCookie,
    getLocalStorage: getLocalStorage,
    hasValue: hasValue,
    setCookie: setCookie,
    setLocalStorage: setLocalStorage,
    validateIdCardNo: validateIdCardNo
  }

  return index;

})));
