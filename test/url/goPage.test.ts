import {
  describe, expect, test
} from '@jest/globals'
import goPage from '../../src/url/goPage'

describe('跳转到对应页面', () => {
  test('无参数跳转', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: ''
      },
      writable: true
    })

    goPage('https://www.baidu.com')
    expect(global.window.location.href).toBe('https://www.baidu.com')
  })

  test('有参数跳转', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: ''
      },
      writable: true
    })

    goPage('https://www.baidu.com', { a: 1, b: '2' })
    expect(global.window.location.href).toBe('https://www.baidu.com?a=1&b=2')
  })
})
