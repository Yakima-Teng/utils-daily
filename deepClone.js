// @flow

import extend from './extend'

/**
 * Clone target object deeply
 * - The same as `extend(true, {}, obj)`
 * @param obj {Object} the target object
 * @returns {Object} a new object cloned from target object, but is not the target object
 */
function deepClone (obj: Object): Object {
  return extend(true, {}, obj)
}

export default deepClone
