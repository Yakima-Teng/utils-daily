import getType from '@/common/getType'

/**
 * @apiAnalyze
 * 是否是boolean
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isBoolean: $utils.TIsBoolean = (val): val is boolean => getType(val) === 'boolean'

export default isBoolean
