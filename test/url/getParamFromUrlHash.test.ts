import { describe, expect, test } from '@jest/globals'
import getParamFromUrlHash from '../../src/url/getParamFromUrlHash'

describe('从当前url的hash中取字段值', () => {
  test('hash中存在对应字段时取对应的值', () => {
    global.window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://www.baidu.com?a=1&b=2#/?c=3',
        search: '?a=1&b=2',
        hash: '#/?c=3'
      }
    })
    expect(getParamFromUrlHash('c')).toBe('3')
  })

  test('hash中不存在对应字段时返回空字符串', () => {
    global.window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://www.baidu.com?a=1&b=2#/?c=3',
        search: '?a=1&b=2',
        hash: '#/?c=3'
      }
    })
    expect(getParamFromUrlHash('name')).toBe('')
  })
})
