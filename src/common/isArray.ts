/**
 * @apiAnalyze
 * 是否是数组
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isArray: $utils.TIsArray = (val): val is any[] => Array.isArray(val)

export default isArray
