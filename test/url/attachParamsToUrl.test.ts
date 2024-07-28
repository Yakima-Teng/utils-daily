import { describe, expect, test } from '@jest/globals'
import attachParamsToUrl from '../../src/url/attachParamsToUrl'

describe('调整url中search和hash中的字段值', () => {
  test('对不含search和hash的url，支持在search中新增参数', () => {
    expect(attachParamsToUrl({
      url: 'https://www.example.com',
      params: { test: '1' },
      position: 'search'
    })).toBe('https://www.example.com/?test=1')
  })

  test('对不含search和hash的url，支持在hash中新增参数', () => {
    expect(attachParamsToUrl({
      url: 'https://www.example.com/test',
      params: { a: '1' },
      position: 'hash'
    })).toBe('https://www.example.com/test#/?a=1')
  })

  test('对含search和hash的url，支持在search中新增参数', () => {
    expect(attachParamsToUrl({
      url: 'https://www.example.com/test?a=1&b=2#/test?c=3',
      params: { c: '1' },
      position: 'search'
    })).toBe('https://www.example.com/test?a=1&b=2&c=1#/test?c=3')
  })

  test('对含search和hash的url，支持在hash中新增参数', () => {
    expect(attachParamsToUrl({
      url: 'https://www.example.com/test?a=1&b=2#/test?c=3',
      params: { a: '1' },
      position: 'hash'
    })).toBe('https://www.example.com/test?a=1&b=2#/test?c=3&a=1')
  })

  test('对含search和hash的url，支持在search中修改参数', () => {
    expect(attachParamsToUrl({
      url: 'https://www.example.com/test?a=1&b=2#/test?c=3',
      params: { a: '2' },
      position: 'search'
    })).toBe('https://www.example.com/test?a=2&b=2#/test?c=3')
  })

  test('对含search和hash的url，支持在hash中修改参数', () => {
    expect(attachParamsToUrl({
      url: 'https://www.example.com/test?a=1&b=2#/test?c=3&d=4',
      params: { c: '1' },
      position: 'hash'
    })).toBe('https://www.example.com/test?a=1&b=2#/test?c=1&d=4')
  })
})
