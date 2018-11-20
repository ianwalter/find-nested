import isObj from 'is-plain-obj'

const notUndefined = val => val !== undefined

function find (single, src, key, filter = notUndefined, debug, instances = []) {
  const isObject = isObj(src)
  if (isObject || Array.isArray(src)) {
    const items = isObject ? Object.entries(src) : src.map(i => [undefined, i])
    for (let [name, item] of items) {
      let match = key === name ? item : undefined
      try {
        if (filter(match)) {
          instances.push(match)
          if (single) {
            break
          }
        }
      } catch (err) {
        if (debug) {
          console.debug(err)
        }
      }
      if (Array.isArray(item) || isObj(item)) {
        find(single, item, key, filter, debug, instances)
      }
      if (single && instances.length) {
        break
      }
    }
    return single ? instances[0] : instances
  }
}

export const findNested = (src, key, filter, debug) =>

  find(true, src, key, filter, debug)

export const findAllNested = (src, key, filter, debug) =>

  find(false, src, key, filter, debug)
