const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://rocketseatdbuser:pwdidTxKZAv0GVWs@rocketseatdb-pzgrj.gcp.mongodb.net/test?retryWrites=true&w=majority', 
  { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001, err => {
  if (err) return console.error(err)
  console.log('Server Started in http://localhost:3001')
})
