import {
  describe, expect, test
} from '@jest/globals'
import getRelativeDateString from '../../src/date/getRelativeDateString'

describe('测试getRelativeDateString方法', () => {
  test('按年、月、日偏移', () => {
    expect(getRelativeDateString(new Date(2018, 1, 2), 0, 2, 0)).toBe('2018-04-02')
    expect(getRelativeDateString(new Date(2018, 1, 2), 0, -2, 0)).toBe('2017-12-02')
  })

  test('按年、月、日、时、分、秒偏移', () => {
    expect(getRelativeDateString(new Date(2018, 1, 2), 0, 2, 0, 0, 0, 0)).toBe('2018-04-02 00:00:00')
    expect(getRelativeDateString(new Date(2018, 1, 2), 0, -2, 0, 1, 2, 3)).toBe('2017-12-02 01:02:03')
  })
})
