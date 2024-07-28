import getType from '@/common/getType'

/**
 * @apiAnalyze
 * 是否是number
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isNumber: $utils.TIsNumber = (val): val is number => getType(val) === 'number'

export default isNumber
