import getType from '@/common/getType'

/**
 * @apiAnalyze
 * 是否是undefined
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isUndefined: $utils.TIsUndefined = (val): val is undefined => getType(val) === 'undefined'

export default isUndefined
