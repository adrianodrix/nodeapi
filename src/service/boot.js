const requireDir = require('require-dir')

const config = require('@config')
const app = require('@app')

requireDir('../models')

const normalizaPort = val => {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

module.exports = err => {
  console.clear()

  if (err) return console.error(err)

  app.listen(normalizaPort(config.app.port), error => {
    if (error) return console.error(error)
    console.log(`Server Started in http://localhost:${config.app.port}`)
    return true
  })
  return true
}
