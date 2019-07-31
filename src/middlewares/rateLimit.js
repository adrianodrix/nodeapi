const rateLimit = require('express-rate-limit')
const slowDown = require('express-slow-down')

const config = require('@config')

const limiter = rateLimit(config.request.rateLimit)
const speedLimiter = slowDown(config.request.slowDown)

module.exports = [
  limiter,
  speedLimiter,
]
