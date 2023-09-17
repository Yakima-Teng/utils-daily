import getLocalStorage from '@/storage/getLocalStorage'
import setLocalStorage from '@/storage/setLocalStorage'
import merge from '@/object/merge'

/**
 * @apiAnalyze
 * 更新本地缓存
 * @since 0.0.13
 * @note 该方法会先尝试获取历史缓存，如果有则用新传入的对象对历史缓存结果进行merge操作，然后存入更新后的结果
 * @param key {string} 缓存key
 * @param val {object} 要更新的键值对
 * @return {undefined}
 */
const updateLocalStorage: $utils.TUpdateLocalStorage = (key, val) => {
  const oldVal = getLocalStorage(key)
  if (!oldVal) {
    setLocalStorage(key, val)
    return
  }
  const newVal = merge(oldVal, val)
  setLocalStorage(key, newVal)
}

export default updateLocalStorage
