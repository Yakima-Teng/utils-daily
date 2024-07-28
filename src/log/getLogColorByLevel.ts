const getLogColorByLevel: $utils.TGetLogColorByLevel = (level) => {
  if (level === 'error') {
    return 'red'
  }
  if (level === 'warn') {
    return 'orange'
  }
  return 'gray'
}

export default getLogColorByLevel
