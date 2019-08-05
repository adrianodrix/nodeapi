const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

module.exports = mongoose
