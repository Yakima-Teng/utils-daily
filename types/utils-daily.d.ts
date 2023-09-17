/**
 * Name: typescript definition for utils-daily
 * Version: {{ version }}
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

  function request<T = unknown>(payload: IPayloadRequest): Promise<IAxiosResponse<T>>

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

  type TType = 'object' | 'array' | 'function' | 'null' | 'undefined' | 'number' | 'boolean' | 'date' | 'regexp' | 'string'
  type TGetType = (val: any) => TType

  type THasValue = (val: any) => boolean

  type TIsArray = (val: unknown) => val is any[]

  type TIsBoolean = (val: unknown) => val is boolean

  type TIsDate = (val: unknown) => val is Date

  type TIsFunction = (val: unknown) => val is (...args: any[]) => any

  type TIsNull = (val: unknown) => val is null

  type TIsNumber = (val: unknown) => val is number

  type TIsObject = (val: unknown) => val is object

  type TIsRegExp = (val: unknown) => val is RegExp

  type TIsString = (val: unknown) => val is string

  type TIsUndefined = (val: unknown) => val is undefined

  type TThrottle = (
    func: (...args: any[]) => any,
    wait: number,
    options?: { leading?: boolean; trailing?: boolean }
  ) => (...args: any[]) => any

  type TDateToLongString = (date: Date) => string

  type TDateToShortString = (date: Date) => string

  type TGetRelativeDateString = (dat: Date, yDiff: number, mDiff: number, dDiff: number, hDiff?: number, miDiff?: number, sDiff?: number) => string

  type TLongStringToDate = (dateString: string) => Date

  type TShortStringToDate = (dateString: string) => Date

  type TTimestampToLongString = (ts: number) => string

  type TTimestampToShortString = (ts: number) => string

  type TIsIOS = () => boolean

  type TAdd = (arr: number[], numOfDecimalPlaces?: number) => string

  type TDivide = (arr: number[], numOfDecimalPlaces?: number) => string

  type TGetInteger = (val: string | number) => number

  type TMultiply = (arr: number[], numOfDecimalPlaces?: number) => string

  type TRandom = (min: number, max: number) => number

  type TSubtract = (rawArr: Array<string | number>, numOfDecimalPlaces?: number) => string

  type TCloneDeep = (obj: any) => any

  type TIsEmpty = (val: unknown) => boolean

  type TMerge = (target: Record<string, unknown>, ...arg: Record<string, unknown>[]) => Record<string, unknown>

  type TClearLocalStorage = () => void

  type TClearSessionStorage = () => void

  type TGetCookie = (name: string) => string

  type TGetLocalStorage = (key: string) => Record<string, unknown> | null

  type TGetSessionStorage = (key: string) => Record<string, string> | null

  type TRemoveLocalStorage = (key: string) => void

  type TRemoveSessionStorage = (key: string) => void

  type TSetCookie = (name: string, val: string, expireDays?: number) => void

  type TSetLocalStorage = (key: string, val: Record<string, unknown>) => void

  type TSetSessionStorage = (key: string, val: Record<string, unknown>) => void

  type TUpdateLocalStorage = (key: string, val: Record<string, unknown>) => void

  type TUpdateSessionStorage = (key: string, val: Record<string, unknown>) => void

  type TFillLeft = (val: string | number, len: number, symbol: string) => string

  type TGetString = (val: unknown) => string

  type TToDouble = (num: string | number) => string

  interface IParamsAttachParamsToUrl {
    url: string
    params: Record<string, string>
    // 指定是加到location.search中，还是location.hash中
    position: TUrlParamPosition
  }
  type TAttachParamsToUrl = (payload: IParamsAttachParamsToUrl) => string

  type TGetParamFromUrlPart = (partName: 'search' | 'hash', keyName: string) => string
  type TGetParamFromUrlHash = (name: string) => string
  type TGetParamFromUrlQuery = (name: string) => string

  type TGoPage = (path: string, query?: Record<string, string | number>) => void

  type TParseSearchString = (url: string) => Record<string, string>

  type TSerializeParams = (params: Record<string, string | number>) => string

  type TValidateCarPlate = (plateNo: string) => boolean

  type TValidateIdCardNo = (idCardNo: string) => boolean

  type TValidatePhone = (phone: string) => boolean

  interface IStore {
    projectId: string
    pv: boolean
    uv: boolean
    bv: boolean
    log: boolean
    jsError: boolean
    blackList: Array<string | RegExp>
    whiteList: Array<string | RegExp>
    queuedLogs: IParamsAddLog[]
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
  }
}

export = $utils;

export as namespace $utils;

declare global {
  interface Window {
    u: $utils.IUtils
  }
}
