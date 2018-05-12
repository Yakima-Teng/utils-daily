// @flow

import getType from './getType'

/**
 * Merge properties of object B to object A
 * - This will change object A
 * @param objA {object} object A
 * @param objB {object} object B
 * @returns {object} object A after merging
 */
function merge (objA: Object, objB: Object): Object {
  if (objA && objB) {
    for (let p in objB) {
      if (objB.hasOwnProperty(p)) {
        if (getType(objA[p]) === 'object' && getType(objB[p]) === 'object') {
          merge(objA[p], objB[p])
        } else {
          objA[p] = objB[p]
        }
      }
    }
  }
  return objA
}

export default merge
