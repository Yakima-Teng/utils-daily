/**
 * 从url上获取参数
 * @param partName {string} 'search' | 'hash'
 * @param keyName {string}
 * @returns {string}
 */
export const getParamFromUrlPart: $utils.TGetParamFromUrlPart = (partName, keyName) => {
  const regExp = new RegExp(`^.*${keyName}=([^&?]*)[^&?]?.*$`)
  const arrMatch = location[partName].match(regExp)
  if (arrMatch !== null && arrMatch.length > 1) {
    const returnVal = arrMatch[1]
    if (returnVal === 'null' || returnVal === 'undefined') {
      return ''
    }
    return returnVal || ''
  }
  return ''
}

/**
 * @apiAnalyze
 * 从url链接中hash部分（即链接中#后面的部分）获取参数的值（注意：#后面的部分若存在问号，问号及其后面的部分，也是算hash部分的）
 * @since 0.0.13
 * @param name {string}
 * @return {string}
 */
const getParamFromUrlHash: $utils.TGetParamFromUrlHash = (name) => getParamFromUrlPart('hash', name)

export default getParamFromUrlHash
