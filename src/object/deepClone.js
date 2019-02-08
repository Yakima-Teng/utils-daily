// @flow

import extend from './extend'

/**
 * Clone target object deeply
 * - The same as `extend(true, {}, obj)`
 * @param obj {Object} the target object
 * @returns {Object} a new object cloned from target object, but is not the target object
 *
 * @example
 * ```javascript
 * const objA = {
 *   a: '1',
 *   b: ['1', '2', '3'],
 *   c: { d: 'e' }
 * }
 * const objB = {
 *   a: 'e'
 * }
 * const objC = deepClone({}, objA, objB, { a: objB }) // { a: { a: 'e' }, b: ['1', '2', '3'], c: { d: 'e' } }
 * console.log(objC.a === objB) // false
 * ```
 */
function deepClone (obj: Object): Object {
  return extend(true, {}, obj)
}

export default deepClone
