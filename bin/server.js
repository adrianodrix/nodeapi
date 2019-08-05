require('dotenv').config()
require('module-alias/register')

const boot = require('@service/boot')
const con = require('@service/db')

const config = require('@config')

if (config.db.connectionString) {
  con.connect(config.db.connectionString, boot)
} else {
  console.log('No connection string provided.')
}
