import toDouble from '@/string/toDouble'

// 获取带毫秒的时间文本，用于日志打印
const getLogTime = (): string => {
  const objDate = new Date()
  const year = objDate.getFullYear()
  const month = toDouble(objDate.getMonth() + 1)
  const day = toDouble(objDate.getDate())
  const hour = toDouble(objDate.getHours())
  const min = toDouble(objDate.getMinutes())
  const seconds = toDouble(objDate.getSeconds())
  const milliseconds = objDate.getMilliseconds()
  return `${year}-${month}-${day} ${hour}:${min}:${seconds}.${milliseconds}`
}

export default getLogTime
