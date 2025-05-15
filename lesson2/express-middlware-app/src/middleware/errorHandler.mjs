import { log } from '../config/logger.mjs'

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  error.status = 404
  next(error)
}

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const mode = process.env.NODE_ENV || 'development'

  log(err.message, 'error')
  if (mode !== 'production') {
    log(err.stack, 'error')
  }
  res.status(statusCode).json({
    message: err.message,
    stack: mode === 'production' ? '🥞' : err.stack
  })
}
