/**
 * Get the type of a variable
 * @param val {any} the variable
 * @returns {string} 'array', 'object', 'function', 'null', 'undefined', 'string', 'number'
 */
function getType (val) {
  return ({}).toString.call(val).slice(8, -1).toLowerCase()
}

export default getType