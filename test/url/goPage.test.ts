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

  test('只有query参数跳转1', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: ''
      },
      writable: true
    })

    goPage({ url: 'https://www.baidu.com', query: { a: 1, b: '2' } })
    expect(global.window.location.href).toBe('https://www.baidu.com/?a=1&b=2')
  })

  test('只有query参数跳转2', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
        replace() {
          //
        }
      },
      writable: true
    })

    const fromUrl = 'http://localhost:9001/?t=1695269117664#/'
    const ts = Date.now()
    const returnUrl = goPage({
      url: 'http://localhost:9002/navpage/',
      query: {
        env: 'int',
        fromUrl,
        t: ts
      },
      config: {
        replace: true
      }
    })
    expect(returnUrl).toBe(`http://localhost:9002/navpage/?env=int&fromUrl=${encodeURIComponent(fromUrl)}&t=${ts}`)
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
