import getType from '@/common/getType'

/**
 * @apiAnalyze
 * 是否是null
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isNull: $utils.TIsNull = (val): val is null => getType(val) === 'null'

export default isNull
