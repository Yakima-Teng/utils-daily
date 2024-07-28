const store: $utils.IStore = {
  timeLogMap: new Map<string, number>()
}

export const updateStore: $utils.TUpdateStore = (config) => Object.assign(store, config)

export const getStore: $utils.TGetStore = () => store
