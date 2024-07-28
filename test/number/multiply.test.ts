import {
  describe, expect, test
} from '@jest/globals'
import multiply from '../../src/number/multiply'

describe('进行数字相关操作', () => {
  test('测试乘法', () => {
    const arr = [1, 2, 3]
    expect(multiply(arr)).toBe('6')
    expect(multiply(arr, 2)).toBe('6.00')
  })
})
