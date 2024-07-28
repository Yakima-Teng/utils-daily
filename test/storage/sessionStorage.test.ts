import {
  describe, test, expect, beforeEach
} from '@jest/globals'
import setSessionStorage from '../../src/storage/setSessionStorage'
import getSessionStorage from '../../src/storage/getSessionStorage'
import clearSessionStorage from '../../src/storage/clearSessionStorage'
import updateSessionStorage from '../../src/storage/updateSessionStorage'
import removeSessionStorage from '../../src/storage/removeSessionStorage'

class SessionStorageMock {
  private store: object

  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = String(value)
  }

  removeItem(key) {
    delete this.store[key]
  }
}

describe('测试localStorage相关api', () => {
  beforeEach(() => {
    global.sessionStorage = new SessionStorageMock()
  })

  test('直接读取不存在的缓存', () => {
    const val = getSessionStorage('user')
    expect(val).toEqual(null)
  })

  test('先赋值，后读取不存在的缓存', () => {
    setSessionStorage('user', {})
    const val = getSessionStorage('customer')
    expect(val).toEqual(null)
  })

  test('先赋值有数字的情况，后读取存在的缓存', () => {
    setSessionStorage('user', { a: { c: 1 } })
    const val = getSessionStorage('user')
    expect(val).toEqual({ a: { c: 1 } })
  })

  test('先赋值没有数字的情况，后读取存在的缓存', () => {
    setSessionStorage('user', { a: { c: '1' } })
    const val = getSessionStorage('user')
    expect(val).toEqual({ a: { c: '1' } })
  })

  test('先设置缓存，然后清空缓存再查询', () => {
    setSessionStorage('user1', {})
    setSessionStorage('user2', { name: 'user2' })
    clearSessionStorage()
    const user2 = getSessionStorage('user2')
    expect(user2).toEqual(null)
  })

  test('直接更新不存在的缓存，然后查询', () => {
    updateSessionStorage('user', { name: 'haha' })
    const user = getSessionStorage('user')
    expect(user).toEqual({ name: 'haha' })
  })

  test('更新存在的缓存，然后查询', () => {
    setSessionStorage('user', { name: 'test', age: 18 })
    updateSessionStorage('user', { name: 'haha', from: 'China' })
    const user = getSessionStorage('user')
    expect(user).toEqual({ name: 'haha', age: 18, from: 'China' })
  })

  test('移除缓存后再查询', () => {
    setSessionStorage('user', {})
    removeSessionStorage('user')
    const user = getSessionStorage('user')
    expect(user).toEqual(null)
  })
})
