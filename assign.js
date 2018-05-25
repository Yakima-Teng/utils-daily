// @flow

/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object
 * @param target {Object} the target object
 * @param sources {Array<Object>} the source object(s)
 * @returns {Object} the target Object
 */
function assign (target: Object, ...sources: Array<Object>) {
  return (() => {
    if (typeof Object.assign === 'function') {
      return Object.assign(target, ...sources)
    } else {
      return polyfill(target, ...sources)
    }
  })()
}

/**
 * Polyfill for Object.assign, code from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @ignore
 * @param target
 * @param sources
 * @returns {any}
 */
function polyfill (target: Object, ...sources: Array<Object>): Object {
  return (() => {
    'use strict'
    // TypeError if undefined or null
    if (target === null || target === undefined) {
      throw new TypeError('Cannot convert undefined or null to object')
    }

    const to = Object(target)

    for (let i = 0, len = sources.length; i < len; i++) {
      const nextSource = sources[i]

      // Skip over if undefined or null
      if (nextSource !== null && nextSource !== undefined) {
        for (const nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
    }
    return to
  })()
}

export default assign
