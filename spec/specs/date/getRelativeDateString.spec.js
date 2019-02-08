import getRelativeDateString from '../../../src/date/getRelativeDateString'

describe('getRelativeDateString', () => {
  it('should return date string after calculation with positive parameters', function () {
    const date: Date = new Date()
    date.setFullYear(2018)
    date.setMonth(2)
    date.setDate(13)
    const relativeDateString: string = getRelativeDateString(date, 1, 2, 3)
    expect(relativeDateString).toEqual('2019-05-16')
    date.setHours(1)
    date.setMinutes(29)
    date.setSeconds(14)
    const anotherRelativeDateString: string = getRelativeDateString(date, 1, 1, 1, 2, 3, 4)
    expect(anotherRelativeDateString).toEqual('2019-04-14 03:32:18')
  })

  it('should return date string after calculation with negative parameters', function () {
    const date: Date = new Date()
    date.setFullYear(2018)
    date.setMonth(2)
    date.setDate(13)
    const relativeDateString: string = getRelativeDateString(date, -1, -4, -3)
    expect(relativeDateString).toEqual('2016-11-10')
    date.setHours(1)
    date.setMinutes(29)
    date.setSeconds(14)
    const anotherRelativeDateString: string = getRelativeDateString(date, -1, -1, -1, -2, -3, -4)
    expect(anotherRelativeDateString).toEqual('2017-02-11 23:26:10')
  })

  it('should be able to throw error when passed wrong number of parameters', function () {
    const errMsg = 'length of arguments for function getRelativeDateString should be either 4 or 7'
    const date = new Date()
    expect(() => { getRelativeDateString() }).toThrowError(errMsg)
    expect(() => { getRelativeDateString(date) }).toThrowError(errMsg)
    expect(() => { getRelativeDateString(date, 1) }).toThrowError(errMsg)
    expect(() => { getRelativeDateString(date, 1, 2) }).toThrowError(errMsg)
    expect(() => { getRelativeDateString(date, 1, 2, 3, 4) }).toThrowError(errMsg)
    expect(() => { getRelativeDateString(date, 1, 2, 3, 4, 5) }).toThrowError(errMsg)
  })

  it('should not change the date object passed in', function () {
    const ts = +new Date()
    const date = new Date(ts)
    const dateString1 = getRelativeDateString(date, 1, 2, 3)
    const tsAfterFunctionCall = +date
    expect(tsAfterFunctionCall).toEqual(ts)
  })
})
