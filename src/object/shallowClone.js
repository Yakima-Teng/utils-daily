// @flow

import extend from './extend'

/**
 * Clone target object shallowly
 * - The same as `extend({}, obj)`
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
 * const objC = shallowClone({}, objA, objB, { a: objB }) // { a: { a: 'e' }, b: ['1', '2', '3'], c: { d: 'e' } }
 * console.log(objC.a === objB) // true
 * ```
 */
function shallowClone (obj: Object): Object {
  return extend({}, obj)
}

export default shallowClone
