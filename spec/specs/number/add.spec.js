import add from '../../../src/number/add'
import { msgForInvalidNumber } from '../../../src/number/_validateNumber'

describe('add', function () {
  it('should calculate out the right result', function () {
    expect(add([1, 2])).toEqual('3')
    expect(add([1, 2, 3])).toEqual('6')
    expect(add([0.1, 0.2, 1])).toEqual('1.3')
    expect(add([100, 200])).toEqual('300')
    expect(add([0.1, 0.2])).toEqual('0.3')
    expect(add([0.1, 0.7])).toEqual('0.8')
    expect(add([0.1, 0.71])).toEqual('0.81')
    expect(add([0.1, 0.71], 3)).toEqual('0.810')
  })

  it('should throw error when handling big/small numbers or number in format of scientific notation', function () {
    expect(add([0, 0.000001])).toEqual('0.000001')
    expect(add([0, 0.0000011])).toEqual('0.0000011')
    expect(() => { add([0, 0.0000001]) }).toThrowError(msgForInvalidNumber)
    expect(add([1, 1e1])).toEqual('11')
    expect(() => { add([1, '1e1']) }).toThrowError(msgForInvalidNumber)
    expect(add([1234567890123456, 0.2])).toEqual('1234567890123456.2')
    expect(() => { add([12345678901234567, 0.2]) }).toThrowError(msgForInvalidNumber)
  })
})
