import longStringToDate from '../../longStringToDate'

describe('longStringToDate', function () {
  it('should transform long string to date', function () {
    const longString = '2018-10-12 12:19:59'
    const resultDate = longStringToDate(longString)
    const tsForLongString = +new Date(longString)
    const tsForResultDate = +resultDate
    expect(tsForLongString).toEqual(tsForResultDate)
  })
})
