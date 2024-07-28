import {
  describe, expect, test
} from '@jest/globals'
import timestampToShortString from '../../src/date/timestampToShortString'

describe('测试timestampToShortString方法', () => {
  test('将时间戳转换成Date对象实例', () => {
    const dateStr = '2018-01-01 12:13:14'
    const timestamp = new Date(dateStr).getTime()
    expect(timestampToShortString(timestamp)).toBe(dateStr.substring(0, 10))
  })
})
