import {
  describe, expect, test
} from '@jest/globals'
import longStringToDate from '../../src/date/longStringToDate'

describe('测试longStringToDate方法', () => {
  test('将形如`YYYY-MM-DD hh:mm:ss`的日期字符串转换成Date对象实例', () => {
    const dateStr = '2018-02-01 12:13:14'
    const date = longStringToDate(dateStr)
    expect(date.getTime()).toBe(new Date(dateStr).getTime())
  })
})
