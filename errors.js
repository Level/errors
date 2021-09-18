'use strict'

function createError (type, Proto) {
  const Err = function (message, cause) {
    if (message && typeof message !== 'string') {
      // Can be passed just a cause
      cause = cause || message
      message = message.message || message.name
    }

    Object.defineProperty(this, 'type', { value: type, enumerable: false, writable: true, configurable: true })
    Object.defineProperty(this, 'name', { value: type, enumerable: false, writable: true, configurable: true })
    Object.defineProperty(this, 'cause', { value: cause, enumerable: false, writable: true, configurable: true })
    Object.defineProperty(this, 'message', { value: message || '', enumerable: false, writable: true, configurable: true })

    Error.call(this)

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, Err)
    }
  }

  if (Proto != null) {
    Err.prototype = new Proto()
  }

  return Err
}

const LevelUPError = createError('LevelUPError')

module.exports = {
  LevelUPError: LevelUPError,
  InitializationError: createError('InitializationError', LevelUPError),
  OpenError: createError('OpenError', LevelUPError),
  ReadError: createError('ReadError', LevelUPError),
  WriteError: createError('WriteError', LevelUPError),
  NotFoundError: createError('NotFoundError', LevelUPError),
  EncodingError: createError('EncodingError', LevelUPError)
}

module.exports.NotFoundError.prototype.notFound = true
module.exports.NotFoundError.prototype.status = 404
