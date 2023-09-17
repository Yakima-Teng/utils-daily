import { describe, expect, test } from '@jest/globals'
import getParamFromUrlQuery from '../../src/url/getParamFromUrlQuery'

describe('从当前url的search中取字段值', () => {
  test('search中存在对应字段时取对应的值', () => {
    global.window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://www.baidu.com?a=1&b=2#/?c=3',
        search: '?a=1&b=2',
        hash: '#/?c=3'
      }
    })
    expect(getParamFromUrlQuery('a')).toBe('1')
  })

  test('search中不存在对应字段时返回空字符串', () => {
    global.window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://www.baidu.com?a=1&b=2#/?c=3',
        search: '?a=1&b=2',
        hash: '#/?c=3'
      }
    })
    expect(getParamFromUrlQuery('name')).toBe('')
  })
})
