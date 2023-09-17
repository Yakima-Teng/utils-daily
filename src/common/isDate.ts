import getType from '@/common/getType'

/**
 * @apiAnalyze
 * 是否是日期对象
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isDate: $utils.TIsDate = (val): val is Date => getType(val) === 'date'

export default isDate
