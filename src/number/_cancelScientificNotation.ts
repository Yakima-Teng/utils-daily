/**
 * Transform format of number to normal form instead of scientific notation
 * @param num {string} number in format of scientific notation
 * @return {string} number in format of normal form
 */
function cancelScientificNotation(num: string): string {
  let numOfDecimalPlaces
  try {
    numOfDecimalPlaces = num.split('.')[1].split(/[eE]/)[0].length
  } catch (e) {
    numOfDecimalPlaces = 0
  }
  const isNumNegative = parseFloat(num) < 0
  const exponent = Math.log(isNumNegative ? 0 - parseFloat(num) : parseFloat(num)) / Math.log(10)
  const positiveExponent = Math.ceil(exponent > 0 ? exponent : 0 - exponent)
  if (parseFloat(num) > 1) {
    return parseFloat(num).toFixed(numOfDecimalPlaces)
  } if (parseFloat(num) < 0) {
    return `-${(0 - parseFloat(num)).toFixed(positiveExponent + numOfDecimalPlaces)}`
  }
  return parseFloat(num).toFixed(positiveExponent + numOfDecimalPlaces)
}

export default cancelScientificNotation
