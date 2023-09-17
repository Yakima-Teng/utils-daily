import { describe, expect, test } from '@jest/globals'
import serializeParams from '../../src/url/serializeParams'

describe('将对象序列化成字符串', () => {
  test('测试空对象', () => {
    expect(serializeParams({})).toBe('')
  })

  test('测试有一个key的对象', () => {
    expect(serializeParams({ a: 1 })).toBe('a=1')
  })

  test('测试有多个key的对象', () => {
    expect(serializeParams({ a: 1, b: 'c' })).toBe('a=1&b=c')
  })
})
