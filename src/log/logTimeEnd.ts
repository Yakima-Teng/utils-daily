import { getStore } from '@/store'
import printLog from '@/log/printLog'
import printError from '@/log/printError'

const logTimeEnd: $utils.TLogTimeEnd = (label) => {
  const { timeLogMap } = getStore()
  const endTime = Date.now()
  const startTime = timeLogMap.get(label)
  if (!startTime) return
  const duration = endTime - startTime
  timeLogMap.delete(label)
  if (duration < 100) {
    printLog(`${label}耗时较快：${duration}ms`)
    return
  }
  printError(`${label}耗时较慢：${(duration / 1000).toFixed(3)}s`)
}

export default logTimeEnd
