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

    goPage({ url: 'https://www.baidu.com' })
    expect(global.window.location.href).toBe('https://www.baidu.com')
  })

  test('只有query参数跳转', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: ''
      },
      writable: true
    })

    goPage({ url: 'https://www.baidu.com', query: { a: 1, b: '2' } })
    expect(global.window.location.href).toBe('https://www.baidu.com/?a=1&b=2')
  })

  test('只有hash query参数跳转', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: ''
      },
      writable: true
    })

    goPage({ url: 'https://www.baidu.com', hash: { a: 1, b: '2' } })
    expect(global.window.location.href).toBe('https://www.baidu.com/#/?a=1&b=2')
  })

  test('有query和hash query参数跳转', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: ''
      },
      writable: true
    })

    goPage({ url: 'https://www.baidu.com/#/hashPath', query: { a: 1, b: '2' }, hash: { c: '5', b: 2 } })
    expect(global.window.location.href).toBe('https://www.baidu.com/?a=1&b=2#/hashPath?c=5&b=2')
  })
})
