const isObj = require('is-obj')

module.exports = function getNestedKey(obj, prop) {
  if (isObj(obj)) {
    for (let key of Object.keys(obj)) {
      let val
      if (key === prop) {
        val = obj[key]
      } else if (Array.isArray(obj[key])) {
        val = obj[key].find(i => getNestedKey(i))
      } else if (isObj(obj[key])) {
        val = getNestedKey(obj[key], prop)
      }
      if (val) {
        return val
      }
    }
  }
}
