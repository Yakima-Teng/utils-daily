import getType from '@/common/getType'

/**
 * @apiAnalyze
 * 是否是正则表达式
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isRegExp: $utils.TIsRegExp = (val): val is RegExp => getType(val) === 'regexp'

export default isRegExp
