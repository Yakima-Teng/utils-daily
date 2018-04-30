declare var document: Document

declare class RouteRegExp extends RegExp {
  keys: Array<{ name: string, optional: boolean }>
}

declare type PathToRegexpOptions = {
  sensitive?: boolean,
  strict?: boolean,
  end?: boolean
}

declare type Dictionary<T> = { [key: string]: T }

declare type NavigationGuard = {
  to: Route,
  from: Route,
  next: (to?: RawLocation | false | Function | void) => void
} => any

declare type Position = { x: number, y: number }

declare type PositionResult = Position | { selector: string, offset?: Position } | void;

declare type RouterOptions = {
  routes?: Array<RouteConfig>,
  mode?: string,
  fallback?: boolean,
  base?: string,
  parseQuery?: (query: string) => Object,
  stringifyQuery?: (query: Object) => string,
  scrollBehavior?: (
    to: Route,
    from: Route,
    savedPosition: ?Position
  ) => PositionResult | Promise<PositionResult>
}

declare type RedirectOption = RawLocation | ((to: Route) => RawLocation)

declare type RouteConfig = {
  path: string,
  name?: string,
  component?: any,
  redirect?: RedirectOption,
  alias?: string | Array<string>,
  children?: Array<RouteConfig>,
  beforeEnter?: NavigationGuard,
  meta?: any,
  props: boolean | Object | Function,
  caseSensitive?: boolean,
  pathToRegexpOptions?: PathToRegexpOptions
}

declare type RouteRecord = {
  path: string,
  regex: RouteRegExp,
  // In addition to the type in ?type, maybe types can also be null or void.
  name: ?string,
  parent: ?RouteRecord,
  redirect: ?RedirectOption,
  beforeEnter: ?NavigationGuard,
  meta: any,
  props: boolean | Object | Function | Dictionary<boolean | Object | Function>
}

declare type Location = {
  name?: string,
  path?: string,
  hash?: string,
  query?: Dictionary<string>,
  params?: Dictionary<string>,
  append?: boolean,
  replace?: boolean
}

declare type RawLocation = string | Location

declare type Route = {
  path: string,
  name: ?string,
  hash: string,
  query: Dictionary<string>,
  params: Dictionary<string>,
  fullPath: string,
  sessionStorageData: any,
  localStorageData: any,
  href: string
}
