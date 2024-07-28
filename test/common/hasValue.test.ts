import {
  describe, expect, test
} from '@jest/globals'
import hasValue from '../../src/common/hasValue'

describe('测试hasValue方法', () => {
  test('判断字符串是否有值', () => {
    expect(hasValue('')).toBe(false)
    expect(hasValue('null')).toBe(false)
    expect(hasValue('undefined')).toBe(false)
    expect(hasValue('none')).toBe(true)
  })

  test('判断null、undefined是否有值', () => {
    expect(hasValue(null)).toBe(false)
    expect(hasValue('null')).toBe(false)
    expect(hasValue(undefined)).toBe(false)
    expect(hasValue('undefined')).toBe(false)
  })

  test('判断数字是否有值', () => {
    expect(hasValue(0)).toBe(true)
    expect(hasValue('0')).toBe(true)
  })

  test('判断对象是否有值', () => {
    expect(hasValue(null)).toBe(false)
    expect(hasValue({})).toBe(true)
  })
})
