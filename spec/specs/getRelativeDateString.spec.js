import getRelativeDateString from '../../getRelativeDateString'

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
})
