import {
  describe, test, expect, beforeEach
} from '@jest/globals'
import getCookie from '../../src/storage/getCookie'
import setCookie from '../../src/storage/setCookie'

const fakeDocumentCookie = {
  cookies: '',

  get cookie() {
    return this.cookies
  },

  set cookie(cookieValue) {
    const cookies = this.cookies.split(' ')
    const cookieName = cookieValue.split('=').shift()
    const cookieNameLength = cookieName.length
    let cookieIndex = -1
    cookies.forEach((value, index) => {
      if (`${value.substr(0, cookieNameLength)}=` === `${cookieName}=`) {
        cookieIndex = index
      }
    })
    if (cookieIndex > -1) {
      cookies[cookieIndex] = `${cookieValue};`
    } else {
      cookies.push(`${cookieValue};`)
    }
    this.cookies = cookies.join(' ').trim()
  }
}

describe('测试localStorage相关api', () => {
  beforeEach(() => {
    global.document.cookie = fakeDocumentCookie
  })

  test('直接读取不存在的缓存', () => {
    const val = getCookie('user')
    expect(val).toEqual('')
  })

  test('先赋值，后读取不存在的缓存', () => {
    setCookie('username', 'Kate')
    const val = getCookie('customer')
    expect(val).toEqual('')
  })

  test('先赋值，后读取存在的缓存', () => {
    setCookie('age', '11')
    const val = getCookie('age')
    expect(val).toBe('11')
  })
})
