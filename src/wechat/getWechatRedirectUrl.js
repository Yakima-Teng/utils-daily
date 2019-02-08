// @flow

/**
 * Return Wechat redirect Url where Wechat will pass code query parameter to us
 * @param appId {string} appId for the Wechat account
 * @param targetUrl {string} entire url including the preceding `http` or `https`
 * @returns {string}
 *
 * @example
 * ```javascript
 * console.log(getWechatRedirectUrl('test', 'http://www.baidu.com?a=b')) // 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=test&redirect_uri=http%3A%2F%2Fwww.baidu.com%3Fa%3Db&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
 * ```
 */
function getWechatRedirectUrl (appId: string, targetUrl: string): string {
  if (/(^http)|(^https)/.test(targetUrl)) {
    const encodedUrl: string = encodeURIComponent(targetUrl)
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodedUrl}&response_type=code&scope=snsapi_base&state=1#wechat_redirect`
  } else {
    throw new Error('parameter targetUrl for function generateWechatRedirectUrl should be preceding with `http` or `https`')
  }
}

export default getWechatRedirectUrl
