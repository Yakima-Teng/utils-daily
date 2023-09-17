import isString from '@/common/isString'

/**
 * @apiAnalyze
 * 修改指定的url链接，将其中location.search或者location.hash中的参数进行修改，或者追加，得到修改后的url地址
 * @since 0.0.13
 * @param payload {object}
 * @param payload.url {string} 修改前的链接地址
 * @param payload.params {Record<string, string>} 要修改/追加的参数对象
 * @param payload.position {string} 'search' | 'hash'，将参数对象应用于search还是hash中
 * @return {string} 修改后的链接地址
 */
const attachParamsToUrl: $utils.TAttachParamsToUrl = (payload) => {
  const { url, params, position } = payload
  let urlInstance: URL
  if (url.startsWith('http')) {
    urlInstance = new URL(url)
  } else if (url.startsWith('/')) {
    urlInstance = new URL(`${location.origin}${url}`)
  } else {
    urlInstance = new URL(url, location.href)
  }
  const { searchParams } = urlInstance
  if (position === 'search') {
    Object.keys(params).forEach((key: keyof typeof params) => {
      if (isString(key)) {
        const val = String(params[key])
        if (['', 'undefined', 'null'].includes(val)) {
          searchParams.delete(key)
        } else {
          searchParams.set(key, val)
        }
      }
    })
  } else if (position === 'hash') {
    let str = ''
    Object.keys(params).forEach((key: keyof typeof params) => {
      str += `${key}=${params[key]}&`
    })
    str = str.replace(/&$/, '')
    if (urlInstance.hash === '') {
      urlInstance.hash = `#/?${str}`
    } else if (urlInstance.hash.includes('?')) {
      urlInstance.hash = `${urlInstance.hash}&${str}`
      // 对整个#/?后面的部分转对象，处理下避免出现重复的key（以后出现的为准）
      const searchStringInHash = urlInstance.hash.split('?')[1]
      const strBeforeQuestionMark = urlInstance.hash.split('?')[0]
      const arr = searchStringInHash.split('&')
      const searchObj = arr.reduce((prev, curr) => {
        const [key, value] = curr.split('=')
        prev[key] = value
        return prev
      }, <Record<string, string>>{})
      let searchString = ''
      Object.keys(searchObj).forEach((key) => {
        searchString += `${key}=${searchObj[key]}&`
      })
      urlInstance.hash = `${strBeforeQuestionMark}?${searchString}`.replace(/&$/, '')
    } else {
      urlInstance.hash = `${urlInstance.hash}?${str}`
    }
  }
  return urlInstance.href
}

export default attachParamsToUrl
