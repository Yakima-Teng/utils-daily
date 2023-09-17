import {
  describe, expect, test
} from '@jest/globals'
import isBoolean from '../../src/common/isBoolean'

describe('测试类型判断方法', () => {
  test('判断是否为boolean', () => {
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(NaN)).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean('null')).toBe(false)
    expect(isBoolean('0')).toBe(false)
    expect(isBoolean('')).toBe(false)
    expect(isBoolean([])).toBe(false)
    expect(isBoolean([1, 2, 3])).toBe(false)
    expect(isBoolean(new Array(3))).toBe(false)
    expect(isBoolean(() => {})).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })
})
