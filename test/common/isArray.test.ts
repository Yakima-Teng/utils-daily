import {
  describe, expect, test
} from '@jest/globals'
import isArray from '../../src/common/isArray'

describe('测试类型判断方法', () => {
  test('判断是否为数组', () => {
    expect(isArray(1)).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray('0')).toBe(false)
    expect(isArray('')).toBe(false)
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(new Array(3))).toBe(true)
    expect(isArray(() => {})).toBe(false)
  })
})
