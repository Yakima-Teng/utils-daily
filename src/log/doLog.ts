import getLogTime from '@/utils/getLogTime'
import getLogColorByLevel from '@/log/getLogColorByLevel'

/**
 * @apiAnalyze
 * 打日志的方法（本地开发时如为方便追中调用栈，可以使用console.error代替console.log）
 * @since 0.0.2
 */
const doLog: $utils.TDoLog = (() => {
  // eslint-disable-next-line no-console
  const rawLog = console.log
  return (level, ...args: any[]) => {
    const time = getLogTime()
    const color = getLogColorByLevel(level)
    return rawLog(`%c[${time}]`, `color:${color};`, ...args)
  }
})()

export default doLog
