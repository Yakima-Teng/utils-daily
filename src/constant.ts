// 前端首页地址
export const HOMEPAGE_URL = (() => {
  if (location.hostname === 'localhost') {
    return 'http://localhost:9001'
  }
  return location.origin
})()

// 前端登录页地址
export const LOGIN_URL = (() => {
  if (location.hostname === 'localhost') {
    return 'http://localhost:9002/navpage'
  }
  return `${location.origin}/navpage`
})()
