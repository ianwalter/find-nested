const isObj = require('is-obj')

module.exports = function findKey (obj, prop) {
  if (isObj(obj)) {
    for (let key of Object.keys(obj)) {
      let val
      if (key === prop) {
        val = obj[key]
      } else if (Array.isArray(obj[key])) {
        val = obj[key].find(i => findKey(i))
      } else if (isObj(obj[key])) {
        val = findKey(obj[key], prop)
      }
      if (val) {
        return val
      }
    }
  }
}
