const express = require('express')
const cors = require('cors')
const sendError = require('@helper/sendError')
const rateLimit = require('@middleware/rateLimit')
const logErrors = require('@helper/logErrors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(sendError)
app.use(...rateLimit)

app.use('/api', require('@/routes'))

app.use(logErrors)

module.exports = app
