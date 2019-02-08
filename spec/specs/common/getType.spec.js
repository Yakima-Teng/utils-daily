import getType from '../../../src/common/getType'

describe('getType', function () {
  it('should return `array` for array', function () {
    expect(getType([])).toEqual('array')
  })

  it('should return `object` for normal object', function () {
    expect(getType({})).toEqual('object')
  })

  it('should return `date` for date object', function () {
    expect(getType(new Date())).toEqual('date')
  })

  it('should return `regexp` for regexp object', function () {
    expect(getType(new RegExp('test'))).toEqual('regexp')
  })

  it('should return `function` for function', function () {
    expect(getType(new Function())).toEqual('function')
    expect(getType(function () {})).toEqual('function')
  })

  it('should return `null` for null', function () {
    expect(getType(null)).toEqual('null')
  })

  it('should return `undefined` for undefined', function () {
    expect(getType(undefined)).toEqual('undefined')
  })

  it('should return `string` for string', function () {
    expect(getType('')).toEqual('string')
    expect(getType('null')).toEqual('string')
    expect(getType('undefined')).toEqual('string')
    expect(getType(`11${'test'}`)).toEqual('string')
    expect(getType('0')).toEqual('string')
  })

  it('should return `number` for number', function () {
    expect(getType(0)).toEqual('number')
    expect(getType(1)).toEqual('number')
    expect(getType(Number(100))).toEqual('number')
  })

  it('should return `boolean` for boolean', function () {
    expect(getType(true)).toEqual('boolean')
    expect(getType(false)).toEqual('boolean')
  })
})
