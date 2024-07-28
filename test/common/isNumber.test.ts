import {
  describe, expect, test
} from '@jest/globals'
import isNumber from '../../src/common/isNumber'

describe('测试类型判断方法', () => {
  test('判断是否为数字', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
    expect(isNumber({})).toBe(false)
    expect(isNumber('null')).toBe(false)
    expect(isNumber('0')).toBe(false)
    expect(isNumber('')).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber([1, 2, 3])).toBe(false)
    expect(isNumber(new Array(3))).toBe(false)
    expect(isNumber(() => {})).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
  })
})
