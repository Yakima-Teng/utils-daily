// @flow

/**
 * Return a random integer between min and max (inclusive).
 * @param min {number} the minimum number (inclusive)
 * @param max {number} the maximum number (inclusive)
 * @returns {number}
 */
function random (min: number, max: number): number {
  if (max == null) {
    max = min
    min = 0
  }
  return min + Math.floor(Math.random() * (max - min + 1))
}

export default random
