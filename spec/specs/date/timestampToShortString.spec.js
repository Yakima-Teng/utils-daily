import timestampToShortString from '../../../src/date/timestampToShortString'

describe('timestampToShortString', function () {
  it('should return short date string', function () {
    const shortString = '2018-09-15'
    const ts = +new Date(shortString)
    expect(timestampToShortString(ts)).toEqual(shortString)
  })
})
