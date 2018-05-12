// @flow

import serializeParams from './_serializeParams'

/**
 * Go to specified path with specified query parameters
 * @param path {string} the target path to go to
 * @param query {object} the target query parameter in format of object containing key:value pairs
 */
function goPage (path: string, query: ?Object): void {
  window.location.href = path + (query ? ('?' + serializeParams(query)) : '')
}

export default goPage
