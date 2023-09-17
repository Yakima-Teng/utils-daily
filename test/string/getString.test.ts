import { describe, expect, test } from '@jest/globals'
import getString from '../../src/string/getString'

describe('将值转成字符串', () => {
  test('将数字1转成字符串`1`', () => {
    expect(getString(1)).toBe('1')
  })

  test('将数字0转成字符串`0`', () => {
    expect(getString(0)).toBe('0')
  })

  test('将null转成空字符串', () => {
    expect(getString(null)).toBe('')
  })

  test('将undefined转成空字符串', () => {
    expect(getString(undefined)).toBe('')
  })

  test('字符串转换后的值与转换前一致', () => {
    expect(getString('test')).toBe('test')
  })
})
