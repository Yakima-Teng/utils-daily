/**
 * @apiAnalyze
 * Return a random integer between min and max (inclusive).
 * @since 0.0.13
 * @param min {number} the minimum number (inclusive)
 * @param max {number} the maximum number (inclusive)
 * @return {number}
 *
 * @example
 * ```javascript
 * console.log(random(0, 0)) // 0
 * console.log(random(0, 1)) // 0 or 1
 * ```
 */
const random: $utils.TRandom = (min, max) => {
  if (max == null) {
    max = min
    min = 0
  }
  return min + Math.floor(Math.random() * (max - min + 1))
}

export default random
