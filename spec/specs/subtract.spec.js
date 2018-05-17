import subtract from '../../subtract'
import { msgForInvalidNumber } from '../../_validateNumber'

describe('subtract', function () {
  it('should calculate out the right result', function () {
    expect(subtract([1, 2])).toEqual('-1')
    expect(subtract([1, 2, 3])).toEqual('-4')
    expect(subtract([0.1, 0.2, 1])).toEqual('-1.1')
    expect(subtract([100, 200])).toEqual('-100')
    expect(subtract([201.2, 200])).toEqual('1.2')
    expect(subtract([1, 0.8])).toEqual('0.2')
  })

  it('should throw error when handling big/small numbers or number in format of scientific notation', function () {
    expect(subtract([1, 0.000001])).toEqual('0.999999')
    expect(() => { subtract([1, 0.0000001]) }).toThrowError(msgForInvalidNumber)
    expect(subtract([1, 1e1])).toEqual('-9')
    expect(() => { subtract([1, '1e1']) }).toThrowError(msgForInvalidNumber)
    expect(subtract([1234567890123456, 1])).toEqual('1234567890123455')
    expect(() => { subtract([12345678901234567, 1]) }).toThrowError(msgForInvalidNumber)
  })
})
