import {
  describe, expect, test
} from '@jest/globals'
import isNull from '../../src/common/isNull'

describe('测试类型判断方法', () => {
  test('判断是否为null', () => {
    expect(isNull(1)).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull('null')).toBe(false)
    expect(isNull('0')).toBe(false)
    expect(isNull('')).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull([1, 2, 3])).toBe(false)
    expect(isNull(new Array(3))).toBe(false)
    expect(isNull(() => {})).toBe(false)
    expect(isNull(null)).toBe(true)
  })
})
