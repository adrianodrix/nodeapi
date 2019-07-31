const logger = require('@service/logger')

module.exports = (err, req, res, next) => {
  logger.error({
    message: err.message,
    status: err.status,
  })
  console.error(err.stack)
  next(err)
}
