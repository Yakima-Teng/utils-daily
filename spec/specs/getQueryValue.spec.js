import getQueryValue from '../../getQueryValue'

describe('getQueryValue', () => {
  it('should return value in string format if value exists', () => {
    const url = 'http://localhost:18080/?test=5&a=6&b&c=5'
    const value = getQueryValue(url, 'a')
    expect(value).toEqual('6')
  })

  it('should return empty string if value does not exist', () => {
    const url = 'http://localhost:18080/?test=5&a=6&b&c=5'
    const value = getQueryValue(url, 'b')
    expect(value).toEqual('')
  })

  it('should return `0` if value is 0', () => {
    const url = 'http://localhost:18080/?test=5&a=6&b&c=5&d=0'
    const value = getQueryValue(url, 'd')
    expect(value).toEqual('0')
  })
})
