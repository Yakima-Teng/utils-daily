import throttle from 'lodash/throttle'

/**
 * @apiAnalyze
 * 即loadash/throttle方法
 *
 * @since 0.0.13
 * @param func {function} 待节流的函数
 * @param wait {number} 节流的时间
 * @param options [object] 字段如下：`{ leading?: boolean, trailing?: boolean }`
 * @return {function} 节流处理后的新函数
 *
 * @example
 * ```javascript
 * const throttledFunc = throttle(func, 300, { loading: true })
 * ```
 */
export default throttle as $utils.TThrottle
