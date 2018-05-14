import generateWechatRedirectUrl from '../../generateWechatRedirectUrl'

describe('generateWechatRedirectUrl', function () {
  it('should return wechat redirect url', function () {
    const appId = 'appId'
    const targetUrl = 'http://www.baidu.com/test#?a=3'
    const wechatRedirectUrl = generateWechatRedirectUrl(appId, targetUrl)
    const resultUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(targetUrl)}&response_type=code&scope=snsapi_base&state=1#wechat_redirect`
    expect(wechatRedirectUrl).toEqual(resultUrl)
  })

  it('should be able to throw error object with wrong value for parameter `targetUrl`', function () {
    const errMessage = 'parameter targetUrl for function generateWechatRedirectUrl should be preceding with `http` or `https`'
    const anonymousFunction = () => { generateWechatRedirectUrl('test', 'test.html') }
    expect(anonymousFunction).toThrowError(errMessage)
  })
})
