const requireDir = require('require-dir')

const config = require('@config')
const app = require('@app')

requireDir('../models')

module.exports = err => {
  console.clear()

  if (err) return console.error(err)

  app.listen(config.app.port, error => {
    if (error) return console.error(error)
    console.log(`Server Started in http://localhost:${config.app.port}`)
    return true
  })
  return true
}
