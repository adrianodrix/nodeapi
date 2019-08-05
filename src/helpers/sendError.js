/* eslint-disable func-names */
const logger = require('@service/logger')

const handleError = function (message, status = 500) {
  logger.error({
    message,
    status,
  })

  this
    .status(status)
    .send({ message })
}

module.exports = (req, res, next) => {
  res.sendError = handleError
  next()
}
