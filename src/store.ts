const store: $utils.IStore = {
  // 项目id
  projectId: '',
  pv: false,
  uv: false,
  bv: false,
  log: false,
  jsError: false,
  // 黑名单中的接口不会进行上报
  blackList: [],
  // 白名单中的接口会进行上报，优先级高于黑名单
  whiteList: [],
  queuedLogs: []
}

export const updateStore: $utils.TUpdateStore = (config) => Object.assign(store, config)

export const getStore: $utils.TGetStore = () => store
