/**
 * Name: typescript definition for utils-daily
 * Version: 1.0.5
 * Created: 2023-09-17 16:15:58
 */

declare namespace $utils {
  // 往url中指定的位置加入参数
  type TUrlParamPosition = 'search' | 'hash'

  interface IPayloadRequest {
    url: string
    method: 'get' | 'post' | 'delete' | 'put' | 'patch'
    params?: Record<string, string | number>
    data?: Record<string, any>
    headers?: Record<string, string>
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
    timeout?: number
    cacheTime?: number
    // 有些接口每次请求时会带一个随机时间戳等强刷缓存的字段，但是我们又想对一个时间内的重复请求进行缓存，则可以通过cacheKey字段固定缓存key
    cacheKey?: string | (() => string)
  }
  interface IAxiosResponseData<T> {
    code: number
    data: T
    message: string
  }
  interface IAxiosResponse<T> {
    config?: any
    data: IAxiosResponseData<T>
    headers: Record<string, string>
    status: number
    statusText: string
    request?: any
  }

  export function request<T = unknown>(payload: IPayloadRequest): Promise<IAxiosResponse<T>>

  type TRequest = typeof request

  type TSendBeacon = (url: string, jsonData: Record<string, unknown>) => boolean

  interface IDebounceOptions {
    leading?: boolean
    maxWait?: number
    trailing?: boolean
  }
  type TDebounce = (
    func: (...args: any[]) => any,
    wait?: number,
    options?: IDebounceOptions
  ) => (...args: any[]) => any
  export function debounce(
    func: (...args: any[]) => any,
    wait?: number,
    options?: IDebounceOptions
  ): (...args: any[]) => any

  type TType = 'object' | 'array' | 'function' | 'null' | 'undefined' | 'number' | 'boolean' | 'date' | 'regexp' | 'string'
  export function getType (val: any): TType
  type TGetType = typeof getType

  export function hasValue(val: any): boolean
  type THasValue = typeof hasValue

  export function isArray (val: unknown): val is any[]
  type TIsArray = typeof isArray

  export function isBoolean (val: unknown): val is boolean
  type TIsBoolean = typeof isBoolean

  export function isDate (val: unknown): val is Date
  type TIsDate = typeof isDate

  export function isFunction (val: unknown): val is (...args: any[]) => any
  type TIsFunction = typeof isFunction

  export function isNull(val: unknown): val is null
  type TIsNull = typeof isNull

  export function isNumber (val: unknown): val is number
  type TIsNumber = typeof isNumber

  export function isObject(val: unknown): val is object
  type TIsObject = typeof isObject

  export function isRegExp (val: unknown): val is RegExp
  type TIsRegExp = typeof isRegExp

  export function isString(val: unknown): val is string
  type TIsString = typeof isString

  export function isUndefined (val: unknown): val is undefined
  type TIsUndefined = typeof isUndefined

  type TThrottle = (
    func: (...args: any[]) => any,
    wait: number,
    options?: { leading?: boolean; trailing?: boolean }
  ) => (...args: any[]) => any
  export function throttle(
    func: (...args: any[]) => any,
    wait: number,
    options?: { leading?: boolean; trailing?: boolean }
  ): (...args: any[]) => any

  export function dateToLongString(date: Date): string
  type TDateToLongString = typeof dateToLongString

  export function dateToShortString(date: Date): string
  type TDateToShortString = typeof dateToShortString

  // eslint-disable-next-line max-len
  export function getRelativeDateString(dat: Date, yDiff: number, mDiff: number, dDiff: number, hDiff?: number, miDiff?: number, sDiff?: number): string
  type TGetRelativeDateString = typeof getRelativeDateString

  export function TLongStringToDate (dateString: string): Date
  type TLongStringToDate = typeof TLongStringToDate

  export function shortStringToDate (dateString: string): Date
  type TShortStringToDate = typeof shortStringToDate

  export function timestampToLongString (ts: number): string
  type TTimestampToLongString = typeof timestampToLongString

  export function timestampToShortString (ts: number): string
  type TTimestampToShortString = typeof timestampToShortString

  export function isIOS (): boolean
  type TIsIOS = typeof isIOS

  export function add (arr: number[], numOfDecimalPlaces?: number): string
  type TAdd = typeof add

  export function divide (arr: number[], numOfDecimalPlaces?: number): string
  type TDivide = typeof divide

  export function getInteger (val: string | number): number
  type TGetInteger = typeof getInteger

  export function multiply (arr: number[], numOfDecimalPlaces?: number): string
  type TMultiply = typeof multiply

  export function random (min: number, max: number): number
  type TRandom = typeof random

  export function subtract (rawArr: Array<string | number>, numOfDecimalPlaces?: number): string
  type TSubtract = typeof subtract

  export function cloneDeep (obj: any): any
  type TCloneDeep = typeof cloneDeep

  export function isEmpty (val: unknown): boolean
  type TIsEmpty = typeof isEmpty

  export function merge (target: Record<string, unknown>, ...arg: Record<string, unknown>[]): Record<string, unknown>
  type TMerge = typeof merge

  export function clearLocalStorage (): void
  type TClearLocalStorage = typeof clearLocalStorage

  export function clearSessionStorage () : void
  type TClearSessionStorage = typeof clearSessionStorage

  export function getCookie (name: string) : string
  type TGetCookie = typeof getCookie

  export function getLocalStorage (key: string) : Record<string, unknown> | null
  type TGetLocalStorage = typeof getLocalStorage

  export function getSessionStorage (key: string) : Record<string, string> | null
  type TGetSessionStorage = typeof getSessionStorage

  export function removeLocalStorage (key: string) : void
  type TRemoveLocalStorage = typeof removeLocalStorage

  export function removeSessionStorage (key: string) : void
  type TRemoveSessionStorage = typeof removeSessionStorage

  export function setCookie (name: string, val: string, expireDays?: number) : void
  type TSetCookie = typeof setCookie

  export function setLocalStorage (key: string, val: Record<string, unknown>) : void
  type TSetLocalStorage = typeof setLocalStorage

  export function setSessionStorage (key: string, val: Record<string, unknown>) : void
  type TSetSessionStorage = typeof setSessionStorage

  export function updateLocalStorage (key: string, val: Record<string, unknown>) : void
  type TUpdateLocalStorage = typeof updateLocalStorage

  export function updateSessionStorage (key: string, val: Record<string, unknown>): void
  type TUpdateSessionStorage = typeof updateSessionStorage

  export function fillLeft (val: string | number, len: number, symbol: string): string
  type TFillLeft = typeof fillLeft

  export function getString (val: unknown): string
  type TGetString = typeof getString

  export function toDouble (num: string | number): string
  type TToDouble = typeof toDouble

  interface IParamsAttachParamsToUrl {
    url: string
    params: Record<string, string>
    // 指定是加到location.search中，还是location.hash中
    position: TUrlParamPosition
  }
  export function attachParamsToUrl (payload: IParamsAttachParamsToUrl): string
  type TAttachParamsToUrl = typeof attachParamsToUrl

  type TGetParamFromUrlPart = (partName: 'search' | 'hash', keyName: string) => string

  export function getParamFromUrlHash (name: string): string
  type TGetParamFromUrlHash = typeof getParamFromUrlHash

  export function getParamFromUrlQuery (name: string): string
  type TGetParamFromUrlQuery = typeof getParamFromUrlQuery

  interface TPayloadGoPage {
    // 跳转路径
    url: string
    // url query查询参数
    query?: Record<string, string | number>
    // url hash中的参数
    hash?: Record<string, string | number>
    // 配置项
    config?: {
      // 是否替换当前访问历史，默认false（不替换）
      replace?: boolean
    }
  }
  export function goPage (payload: TPayloadGoPage): string
  type TGoPage = typeof goPage

  export function parseSearchString (url: string): Record<string, string>
  type TParseSearchString = typeof parseSearchString

  export function serializeParams (params: Record<string, string | number>): string
  type TSerializeParams = typeof serializeParams

  export function validateCarPlate (plateNo: string): boolean
  type TValidateCarPlate = typeof validateCarPlate

  export function TValidateIdCardNo (idCardNo: string): boolean
  type TValidateIdCardNo = typeof TValidateIdCardNo

  export function validatePhone (phone: string): boolean
  type TValidatePhone = typeof validatePhone

  type TLogLevel = 'log' | 'warn' | 'error'
  function getLogColorByLevel (level: TLogLevel): string
  type TGetLogColorByLevel = typeof getLogColorByLevel

  function doLog (level: TLogLevel, ...args: any[]): void
  type TDoLog = typeof doLog

  export function printLog (...args: any[]): void
  type TPrintLog = typeof printLog

  export function printWarn (...args: any[]): void
  type TPrintWarn = typeof printWarn

  export function printError (...args: any[]): void
  type TPrintError = typeof printError

  export function printLog (...args: any[]): void
  type TPrintLog = typeof printLog

  export function logTime (label: string): void
  type TLogTime = typeof logTime

  export function logTimeEnd (label: string): void
  type TLogTimeEnd = typeof logTimeEnd

  interface IStore {
    timeLogMap: Map<string, number>
  }

  type TUpdateStore = (config: Partial<IStore>) => IStore

  type TGetStore = () => IStore

  interface IUtils {
    /**
     * Common
     */
    hasValue: $utils.THasValue,
    debounce: $utils.TDebounce,
    throttle: $utils.TThrottle,
    isObject: $utils.TIsObject,
    isString: $utils.TIsString,
    isArray: $utils.TIsArray,
    isFunction: $utils.TIsFunction,
    isNull: $utils.TIsNull,
    isUndefined: $utils.TIsUndefined,
    isNumber: $utils.TIsNumber,
    isBoolean: $utils.TIsBoolean,
    isDate: $utils.TIsDate,
    isRegExp: $utils.TIsRegExp,

    /**
     * Object
     */
    merge: $utils.TMerge
    cloneDeep: $utils.TCloneDeep
    isEmpty: $utils.TIsEmpty

    /**
     * Date
     */
    getRelativeDateString: $utils.TGetRelativeDateString
    dateToLongString: $utils.TDateToLongString
    dateToShortString: $utils.TDateToShortString
    longStringToDate: $utils.TLongStringToDate
    shortStringToDate: $utils.TShortStringToDate
    timestampToLongString: $utils.TTimestampToLongString
    timestampToShortString: $utils.TTimestampToShortString

    /**
     * String
     */
    fillLeft: $utils.TFillLeft
    toDouble: $utils.TToDouble
    getString: $utils.TGetString

    /**
     * Number
     */
    add: $utils.TAdd
    subtract: $utils.TSubtract
    multiply: $utils.TMultiply
    divide: $utils.TDivide
    getInteger: $utils.TGetInteger
    random: $utils.TRandom

    /**
     * Validate
     */
    validateCarPlate: $utils.TValidateCarPlate
    validateIdCardNo: $utils.TValidateIdCardNo
    validatePhone: $utils.TValidatePhone

    /**
     * Url
     */
    goPage: $utils.TGoPage
    serializeParams: $utils.TSerializeParams
    getParamFromUrlHash: $utils.TGetParamFromUrlHash
    getParamFromUrlQuery: $utils.TGetParamFromUrlQuery
    parseSearchString: $utils.TParseSearchString
    attachParamsToUrl: $utils.TAttachParamsToUrl

    /**
     * Device
     */
    isIOS: $utils.TIsIOS,

    /**
     * Storage
     */
    clearLocalStorage: $utils.TClearLocalStorage
    clearSessionStorage: $utils.TClearSessionStorage
    getCookie: $utils.TGetCookie
    getLocalStorage: $utils.TGetLocalStorage
    getSessionStorage: $utils.TGetSessionStorage
    setCookie: $utils.TSetCookie
    setLocalStorage: $utils.TSetLocalStorage
    setSessionStorage: $utils.TSetSessionStorage
    removeLocalStorage: $utils.TRemoveLocalStorage
    removeSessionStorage: $utils.TRemoveSessionStorage
    updateLocalStorage: $utils.TUpdateLocalStorage
    updateSessionStorage: $utils.TUpdateSessionStorage

    /**
     * api
     */
    request: $utils.TRequest

    /**
     * 日志打印
     */
    printLog: $utils.TPrintLog
    printWarn: $utils.TPrintWarn
    printError: $utils.TPrintError
    logTime: $utils.TLogTime
    logTimeEnd: $utils.TLogTimeEnd
  }
}

export = $utils;

export as namespace $utils;

declare global {
  interface Window {
    u: $utils.IUtils
  }
}
