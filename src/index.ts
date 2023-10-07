/**
 * Common
 */
import hasValue from '@/common/hasValue'
import isObject from '@/common/isObject'
import isString from '@/common/isString'
import isArray from '@/common/isArray'
import isFunction from '@/common/isFunction'
import isNull from '@/common/isNull'
import isUndefined from '@/common/isUndefined'
import isNumber from '@/common/isNumber'
import isBoolean from '@/common/isBoolean'
import isDate from '@/common/isDate'
import isRegExp from '@/common/isRegExp'
import debounce from '@/common/debounce'
import throttle from '@/common/throttle'

/**
 * Object
 */
import merge from '@/object/merge'
import cloneDeep from '@/object/cloneDeep'
import isEmpty from '@/object/isEmpty'

/**
 * Date
 */
import getRelativeDateString from '@/date/getRelativeDateString'
import dateToLongString from '@/date/dateToLongString'
import dateToShortString from '@/date/dateToShortString'
import longStringToDate from '@/date/longStringToDate'
import shortStringToDate from '@/date/shortStringToDate'
import timestampToLongString from '@/date/timestampToLongString'
import timestampToShortString from '@/date/timestampToShortString'

/**
 * String
 */
import fillLeft from '@/string/fillLeft'
import toDouble from '@/string/toDouble'
import getString from '@/string/getString'

/**
 * Number
 */
import add from '@/number/add'
import subtract from '@/number/subtract'
import multiply from '@/number/multiply'
import divide from '@/number/divide'
import getInteger from '@/number/getInteger'
import random from '@/number/random'

/**
 * Validate
 */
import validateCarPlate from '@/validate/validateCarPlate'
import validateIdCardNo from '@/validate/validateIdCardNo'
import validatePhone from '@/validate/validatePhone'

/**
 * Url
 */
import goPage from '@/url/goPage'
import serializeParams from '@/url/serializeParams'
import parseSearchString from '@/url/parseSearchString'
import getParamFromUrlHash from '@/url/getParamFromUrlHash'
import getParamFromUrlQuery from '@/url/getParamFromUrlQuery'
import attachParamsToUrl from '@/url/attachParamsToUrl'

/**
 * Device
 */
import isIOS from '@/device/isIOS'

/**
 * Storage
 */
import clearLocalStorage from '@/storage/clearLocalStorage'
import clearSessionStorage from '@/storage/clearSessionStorage'
import getCookie from '@/storage/getCookie'
import getLocalStorage from '@/storage/getLocalStorage'
import getSessionStorage from '@/storage/getSessionStorage'
import setCookie from '@/storage/setCookie'
import setLocalStorage from '@/storage/setLocalStorage'
import setSessionStorage from '@/storage/setSessionStorage'
import removeLocalStorage from '@/storage/removeLocalStorage'
import removeSessionStorage from '@/storage/removeSessionStorage'
import updateLocalStorage from '@/storage/updateLocalStorage'
import updateSessionStorage from '@/storage/updateSessionStorage'

/**
 * api
 */
import request from '@/api/request'

/**
 * 打印日志
 */
import printLog from '@/log/printLog'
import printWarn from '@/log/printWarn'
import printError from '@/log/printError'
import logTime from '@/log/logTime'
import logTimeEnd from '@/log/logTimeEnd'

const returnObj: $utils.IUtils = {
  /**
   * Common
   */
  hasValue,
  debounce,
  throttle,
  isObject,
  isString,
  isArray,
  isFunction,
  isNull,
  isUndefined,
  isNumber,
  isBoolean,
  isDate,
  isRegExp,

  /**
   * Object
   */
  merge,
  cloneDeep,
  isEmpty,

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
  getParamFromUrlHash,
  getParamFromUrlQuery,
  parseSearchString,
  attachParamsToUrl,

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
  updateLocalStorage,
  updateSessionStorage,

  /**
   * api
   */
  request,

  /**
   * 日志打印
   */
  printLog,
  printWarn,
  printError,
  logTime,
  logTimeEnd
}

export default returnObj
