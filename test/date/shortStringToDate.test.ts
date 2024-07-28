import {
  describe, expect, test
} from '@jest/globals'
import shortStringToDate from '../../src/date/shortStringToDate'

describe('测试shortStringToDate方法', () => {
  test('将形如`YYYY-MM-DD`的日期字符串转换成Date对象实例', () => {
    const dateStr = '2018-02-01'
    const date = shortStringToDate(dateStr)
    expect(date.getTime()).toBe(new Date(`${dateStr} 00:00:00`).getTime())
  })
})
