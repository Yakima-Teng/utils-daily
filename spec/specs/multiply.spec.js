import multiply from '../../multiply'
import { msgForInvalidNumber } from '../../_validateNumber'

describe('multiply', function () {
  it('should calculate out the right result', function () {
    expect(multiply([1, 2])).toEqual('2')
    expect(multiply([1, 2, 3])).toEqual('6')
    expect(multiply([0.1, 0.2, 1])).toEqual('0.02')
    expect(multiply([100, 200])).toEqual('20000')
    expect(multiply([100, 2.01])).toEqual('201')
    expect(multiply([0.1, 2232])).toEqual('223.2')
    expect(multiply([6, 0.7])).toEqual('4.2')
  })

  it('should throw error when handling big/small numbers or number in format of scientific notation', function () {
    expect(multiply([0, 1234567890123456])).toEqual('0')
    expect(() => { multiply([0, 12345678901234567]) }).toThrowError(msgForInvalidNumber)
    expect(multiply([0.000001, 1])).toEqual('0.000001')
    expect(() => { multiply([0.0000001, 1]) }).toThrowError(msgForInvalidNumber)
    expect(multiply([1e1, 1])).toEqual('10')
    expect(() => { multiply(['1e1', 1]) }).toThrowError(msgForInvalidNumber)
  })
})
