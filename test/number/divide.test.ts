import {
  describe, expect, test
} from '@jest/globals'
import divide from '../../src/number/divide'

describe('进行数字相关操作', () => {
  test('测试除法', () => {
    expect(divide([1, 2])).toBe('0.5')
    expect(divide([1, 2, 3], 2)).toBe('0.17')
  })
})
