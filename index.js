const isObj = require('is-obj')

const notUndefined = val => val !== undefined

module.exports = function findNested (obj, prop, descriminator = notUndefined) {
  if (isObj(obj)) {
    for (let key of Object.keys(obj)) {
      let val
      if (key === prop) {
        val = obj[key]
      } else if (Array.isArray(obj[key])) {
        for (let item of obj[key]) {
          val = findNested(item, prop, descriminator)
          if (descriminator(val)) {
            return val
          }
        }
      } else if (isObj(obj[key])) {
        val = findNested(obj[key], prop, descriminator)
      }
      if (descriminator(val)) {
        return val
      }
    }
  }
}
