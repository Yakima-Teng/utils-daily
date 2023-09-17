import {
  describe, expect, test
} from '@jest/globals'
import timestampToLongString from '../../src/date/timestampToLongString'

describe('测试timestampToLongString方法', () => {
  test('将时间戳转换成Date对象实例', () => {
    const dateStr = '2018-01-01 12:13:14'
    const timestamp = new Date(dateStr).getTime()
    expect(timestampToLongString(timestamp)).toBe(dateStr)
  })
})
