// @flow

import extend from './extend'

/**
 * Clone target object shallowly
 * - The same as `extend({}, obj)`
 * @param obj {Object} the target object
 * @returns {Object} a new object cloned from target object, but is not the target object
 */
function shallowClone (obj: Object): Object {
  return extend({}, obj)
}

export default shallowClone
