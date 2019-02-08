import divide from '../../../src/number/divide'
import { msgForInvalidNumber } from '../../../src/number/_validateNumber'

describe('divide', function () {
  it('should calculate out the right result', function () {
    expect(divide([1, 2])).toEqual('0.5')
    expect(divide([1, 2, 3], 2)).toEqual('0.17')
    expect(divide([0.1, 0.2, 1])).toEqual('0.5')
    expect(divide([100, 200])).toEqual('0.5')
    expect(divide([100, 200, 0.2])).toEqual('2.5')
    expect(divide([-100, 5])).toEqual('-20')
    expect(divide([1.2, 0.2])).toEqual('6')
  })

  it('should throw error when handling big/small numbers or number in format of scientific annotation', function () {
    expect(divide([1, 2, 3])).toEqual('0.1666666667')
    expect(divide([1234567890123456, 1])).toEqual('1234567890123456')
    expect(() => { divide([12345678901234567, 1]) }).toThrowError(msgForInvalidNumber)
    expect(divide([1, 1e1])).toEqual('0.1')
    expect(() => { divide([1, '1e1']) }).toThrowError(msgForInvalidNumber)
    expect(divide([0.000001, 1])).toEqual('0.000001')
    expect(() => { divide([0.0000001, 1]) }).toThrowError(msgForInvalidNumber)
  })
})
