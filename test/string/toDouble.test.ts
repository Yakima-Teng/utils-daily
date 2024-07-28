import { describe, expect, test } from '@jest/globals'
import toDouble from '../../src/string/toDouble'

describe('将值转成字符串', () => {
  test('将数字0转成字符串`00`', () => {
    expect(toDouble(0)).toBe('00')
  })

  test('将字符串`1`转成字符串`01`', () => {
    expect(toDouble('1')).toBe('01')
  })

  test('将字符串`11`转成字符串`11`（转换前后没变化）', () => {
    expect(toDouble('11')).toBe('11')
  })

  test('将空字符串转成字符串`00`', () => {
    expect(toDouble('')).toBe('00')
  })
})
