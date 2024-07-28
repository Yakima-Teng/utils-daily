import {
  describe, expect, test
} from '@jest/globals'
import getInteger from '../../src/number/getInteger'

describe('进行数字相关操作', () => {
  test('获取整数', () => {
    expect(getInteger('0')).toBe(0)
    expect(getInteger('')).toBe(0)
    expect(getInteger(2)).toBe(2)
    expect(getInteger(0.12)).toBe(0)
  })
})
