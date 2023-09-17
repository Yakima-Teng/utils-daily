import isEmpty from 'lodash/isEmpty'

/**
 * @apiAnalyze
 * 判断对象、数组等是否为空（即lodash/isEmpty）
 * @since 0.0.13
 * @return {boolean}
 *
 * @example
 * ```javascript
 * isEmpty([1, 2, 3]) // false
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty({ a: 1 }) // false
 * ```
 */
export default isEmpty as $utils.TIsEmpty
