import { getStore } from '@/store'

const logTime: $utils.TLogTime = (label) => {
  const { timeLogMap } = getStore()
  const startTime = Date.now()
  timeLogMap.set(label, startTime)
}

export default logTime
