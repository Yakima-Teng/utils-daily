import getString from '@/string/getString'
import attachParamsToUrl from '@/url/attachParamsToUrl'

/**
 * @apiAnalyze
 * Go to specified path with specified query parameters
 * @since 0.0.13
 *
 * @example
 * ```javascript
 * goPage({ url: 'http://www.baidu.com', query: { a: 1, b: 2 } })
 * ```
 */
const goPage: $utils.TGoPage = (payload) => {
  const {
    url, query, hash, config
  } = payload
  const tempQuery = {} as Record<string, string>
  if (query) {
    Object.keys(query).forEach((key) => {
      tempQuery[key] = getString(query[key])
    })
  }

  const tempHashQuery = {} as Record<string, string>
  if (hash) {
    Object.keys(hash).forEach((key) => {
      tempHashQuery[key] = getString(hash[key])
    })
  }

  let newUrl = url

  if (Object.keys(tempQuery).length > 0) {
    newUrl = attachParamsToUrl({
      url: newUrl,
      params: tempQuery,
      position: 'search'
    })
  }

  if (Object.keys(tempHashQuery).length > 0) {
    newUrl = attachParamsToUrl({
      url: newUrl,
      params: tempHashQuery,
      position: 'hash'
    })
  }

  if (config?.replace) {
    location.replace(newUrl)
  } else {
    window.location.href = newUrl
  }
}

export default goPage
