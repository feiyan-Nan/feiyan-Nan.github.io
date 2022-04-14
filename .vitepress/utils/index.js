const path = require('path')

exports.resolve = (...args) => {
  return path.resolve(__dirname, ...args)
}
