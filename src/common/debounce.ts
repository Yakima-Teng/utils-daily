import debounce from 'lodash/debounce'

/**
 * @apiAnalyze
 * 函数防抖（即loadash/debounce方法）
 *
 * @since 0.0.13
 * @param func {function} 要进行防抖处理的原始函数
 * @param wait {number} 要等待的时间
 * @param setting {object} 包含以下字段：`{ leading?: boolean, maxWait?: number, trailing?: boolean }`
 * @return {function} 防抖处理过的函数
 *
 * @example
 * ```javascript
 * const debouncedFunc = debounce(func, 300, { loading: true })
 * ```
 */
export default debounce as $utils.TDebounce
