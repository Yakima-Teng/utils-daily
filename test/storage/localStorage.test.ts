import {
  describe, test, expect, beforeEach
} from '@jest/globals'
import setLocalStorage from '../../src/storage/setLocalStorage'
import getLocalStorage from '../../src/storage/getLocalStorage'
import clearLocalStorage from '../../src/storage/clearLocalStorage'
import updateLocalStorage from '../../src/storage/updateLocalStorage'
import removeLocalStorage from '../../src/storage/removeLocalStorage'

class LocalStorageMock {
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
    global.localStorage = new LocalStorageMock()
  })

  test('直接读取不存在的缓存', () => {
    const val = getLocalStorage('user')
    expect(val).toEqual(null)
  })

  test('先赋值，后读取不存在的缓存', () => {
    setLocalStorage('user', {})
    const val = getLocalStorage('customer')
    expect(val).toEqual(null)
  })

  test('先赋值有数字的情况，后读取存在的缓存', () => {
    setLocalStorage('user', { a: { c: 1 } })
    const val = getLocalStorage('user')
    expect(val).toEqual({ a: { c: 1 } })
  })

  test('先赋值没有数字的情况，后读取存在的缓存', () => {
    setLocalStorage('user', { a: { c: '1' } })
    const val = getLocalStorage('user')
    expect(val).toEqual({ a: { c: '1' } })
  })

  test('先设置缓存，然后清空缓存再查询', () => {
    setLocalStorage('user1', {})
    setLocalStorage('user2', { name: 'user2' })
    clearLocalStorage()
    const user2 = getLocalStorage('user2')
    expect(user2).toEqual(null)
  })

  test('直接更新不存在的缓存，然后查询', () => {
    updateLocalStorage('user', { name: 'haha' })
    const user = getLocalStorage('user')
    expect(user).toEqual({ name: 'haha' })
  })

  test('更新存在的缓存，然后查询', () => {
    setLocalStorage('user', { name: 'test', age: 18 })
    updateLocalStorage('user', { name: 'haha', from: 'China' })
    const user = getLocalStorage('user')
    expect(user).toEqual({ name: 'haha', age: 18, from: 'China' })
  })

  test('移除缓存后再查询', () => {
    setLocalStorage('user', {})
    removeLocalStorage('user')
    const user = getLocalStorage('user')
    expect(user).toEqual(null)
  })
})
