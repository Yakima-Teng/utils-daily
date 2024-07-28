import {
  describe, expect, test
} from '@jest/globals'
import isDate from '../../src/common/isDate'

describe('测试类型判断方法', () => {
  test('判断是否为日期对象', () => {
    expect(isDate(1)).toBe(false)
    expect(isDate(0)).toBe(false)
    expect(isDate(NaN)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate('null')).toBe(false)
    expect(isDate('0')).toBe(false)
    expect(isDate('')).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate([1, 2, 3])).toBe(false)
    expect(isDate(new Array(3))).toBe(false)
    expect(isDate(() => {})).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
    expect(isDate(true)).toBe(false)
    expect(isDate(false)).toBe(false)
    expect(isDate(new Date())).toBe(true)
  })
})
