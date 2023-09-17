import getType from '@/common/getType'

/**
 * @apiAnalyze
 * 是否是对象
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isObject: $utils.TIsObject = (val): val is object => getType(val) === 'object'

export default isObject
