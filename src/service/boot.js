const mongoose = require('mongoose')
const requireDir = require('require-dir')

const config = require('@config')
const app = require('@app')

mongoose.connect(
  'mongodb+srv://rocketseatdbuser:pwdidTxKZAv0GVWs@rocketseatdb-pzgrj.gcp.mongodb.net/test?retryWrites=true&w=majority',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
)

requireDir('../models')

app.use('/api', require('@/routes'))

module.exports = err => {
  if (err) return console.error(err)

  app.listen(config.app.port, error => {
    if (error) return console.error(error)
    console.log(`Server Started in http://localhost:${config.app.port}`)
    return true
  })
  return true
}
