// this file is generated by gulp task ^_^

/**
 * Common
 */
import hasValue from './common/hasValue.js'
import getType from './common/getType.js'
import debounce from './common/debounce.js'
import throttle from './common/throttle.js'

/**
 * Object
 */
import extend from './object/extend.js'
import assign from './object/assign.js'
import deepClone from './object/deepClone.js'
import shallowClone from './object/shallowClone.js'

/**
 * Date
 */
import getRelativeDateString from './date/getRelativeDateString.js'
import dateToLongString from './date/dateToLongString.js'
import dateToShortString from './date/dateToShortString.js'
import longStringToDate from '../date/longStringToDate.js'
import shortStringToDate from './date/shortStringToDate.js'
import timestampToLongString from './date/timestampToLongString.js'
import timestampToShortString from './date/timestampToShortString.js'

/**
 * String
 */
import fillLeft from './string/fillLeft.js'
import toDouble from './string/toDouble.js'
import getString from './string/getString.js'

/**
 * Array
 */
import map from './array/map.js'
import filter from './array/filter.js'
import findIndex from './array/findIndex.js'
import findLastIndex from './array/findLastIndex.js'
import indexOf from './array/indexOf.js'
import lastIndexOf from './array/lastIndexOf.js'
import contains from './array/contains.js'

/**
 * Number
 */
import add from './number/add.js'
import subtract from './number/subtract.js'
import multiply from './number/multiply.js'
import divide from './number/divide.js'
import getInteger from './number/getInteger.js'
import random from './number/random.js'

/**
 * Validate
 */
import validateCarPlate from './validate/validateCarPlate.js'
import validateIdCardNo from './validate/validateIdCardNo.js'
import validatePhone from './validate/validatePhone.js'

/**
 * Url
 */
import goPage from './url/goPage.js'
import serializeParams from './url/serializeParams.js'
import getQueryValue from './url/getQueryValue.js'

/**
 * Device
 */
import isIOS from './device/isIOS.js'

/**
 * Storage
 */
import clearLocalStorage from './storage/clearLocalStorage.js'
import clearSessionStorage from './storage/clearSessionStorage.js'
import getCookie from './storage/getCookie.js'
import getLocalStorage from './storage/getLocalStorage.js'
import getSessionStorage from './storage/getSessionStorage.js'
import setCookie from './storage/setCookie.js'
import setLocalStorage from './storage/setLocalStorage.js'
import setSessionStorage from './storage/setSessionStorage.js'
import removeLocalStorage from './storage/removeLocalStorage.js'
import removeSessionStorage from './storage/removeSessionStorage.js'

/**
 * Wechat
 */
import getWechatRedirectUrl from './wechat/getWechatRedirectUrl.js'

export default {
  /**
   * Common
   */
  hasValue,
  getType,
  debounce,
  throttle,

  /**
   * Object
   */
  extend,
  assign,
  deepClone,
  shallowClone,

  /**
   * Date
   */
  getRelativeDateString,
  dateToLongString,
  dateToShortString,
  longStringToDate,
  shortStringToDate,
  timestampToLongString,
  timestampToShortString,

  /**
   * String
   */
  fillLeft,
  toDouble,
  getString,

  /**
   * Array
   */
  map,
  filter,
  findIndex,
  findLastIndex,
  indexOf,
  lastIndexOf,
  contains,

  /**
   * Number
   */
  add,
  subtract,
  multiply,
  divide,
  getInteger,
  random,

  /**
   * Validate
   */
  validateCarPlate,
  validateIdCardNo,
  validatePhone,

  /**
   * Url
   */
  goPage,
  serializeParams,
  getQueryValue,

  /**
   * Device
   */
  isIOS,

  /**
   * Storage
   */
  clearLocalStorage,
  clearSessionStorage,
  getCookie,
  getLocalStorage,
  getSessionStorage,
  setCookie,
  setLocalStorage,
  setSessionStorage,
  removeLocalStorage,
  removeSessionStorage,

  /**
   * Wechat
   */
  getWechatRedirectUrl
}
