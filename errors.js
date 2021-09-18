'use strict'

function createError (type, Proto) {
  const Err = function (message, cause) {
    if (message && typeof message !== 'string') {
      message = message.message || message.name
    }

    // can be passed just a 'cause'
    cause = typeof message !== 'string' ? message : cause

    Object.defineProperty(this, 'type', { value: type, enumerable: false, writable: false, configurable: false })
    Object.defineProperty(this, 'name', { value: type, enumerable: false, writable: false, configurable: false })
    Object.defineProperty(this, 'cause', { value: cause, enumerable: false, writable: false, configurable: false })
    Object.defineProperty(this, 'message', { value: message, enumerable: false, writable: false, configurable: false })

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
