import random from '../../random'

describe('random', function () {
  it('should return random number', function () {
    expect(random(1, 1)).toEqual(1)
    expect(random(2, 11)).toBeGreaterThanOrEqual(2)
    expect(random(2, 11)).toBeLessThanOrEqual(11)
  })
})
