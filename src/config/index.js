module.exports = {
  app: {
    port: process.env.PORT || 3001,
  },
  db: {
    connectionString: process.env.MONGO_DB,
  },
  request: {
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
    slowDown: {
      windowMs: 10 * 60 * 1000, // 10 minutes
      delayAfter: 100, // allow 100 requests per 15 minutes, then...
      delayMs: 500,
    },
  },
}
