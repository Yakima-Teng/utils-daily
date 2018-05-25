/**
 * In some browsers, typeof returns 'function' for HTML <object> elements
 * (i.e., `typeof document.createElement( 'object' ) === 'function'`).
 * We don't want to classify *any* DOM node as a function.
 * @ignore
 * @param obj
 * @returns {boolean}
 */
function isFunction (obj) {
  return typeof obj === 'function' && typeof obj.nodeType !== 'number'
}

const toString = ({}).toString

const getProto = Object.getPrototypeOf

const hasOwn = ({}).hasOwnProperty

const fnToString = hasOwn.toString

const ObjectFunctionString = fnToString.call(Object)

function isPlainObject (obj) {
  let proto
  let Ctor

  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }

  proto = getProto(obj)

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
}

/**
 * Merge the contents of two or more objects together into the first object.
 * - This is the [jQuery.extend](http://api.jquery.com/jQuery.extend/) method
 * @param [deep] {boolean} Optional; if true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
 * @param target {Object} The object to extend. It will receive the new properties.
 * @param object1 {Object} An object containing additional properties to merge in.
 * @param [objectN] {Object} Additional objects containing properties to merge in.
 * @returns {Object} the modified target object
 */
function extend () {
  let options
  let name
  let src
  let copy
  let copyIsArray
  let clone
  let target = arguments[ 0 ] || {}
  let i = 1
  const length = arguments.length
  let deep = false

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target

    // Skip the boolean and the target
    target = arguments[ i ] || {}
    i++
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {}
  }

  // Extend jQuery itself if only one argument is passed
  if (i === length) {
    target = this
    i--
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[ i ]) != null) {
      // Extend the base object
      for (name in options) {
        src = target[name]
        copy = options[name]

        // Prevent never-ending loop
        if (target === copy) {
          continue
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (isPlainObject(copy) ||
          (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy)

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }

  // Return the modified object
  return target
}

export default extend
