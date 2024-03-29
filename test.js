'use strict'

const test = require('tape')
const errors = require('.')

test('all errors are instances of Error and LevelUPError', function (t) {
  const LevelUPError = errors.LevelUPError
  const keys = Object.keys(errors)

  keys.forEach(function (key) {
    t.ok(new errors[key]() instanceof Error)
    t.ok(new errors[key]() instanceof LevelUPError)
  })

  t.end()
})

test('error with message has expected properties', function (t) {
  const error = new errors.ReadError('foo')

  t.is(error.type, 'ReadError')
  t.is(error.name, 'ReadError')
  t.is(error.cause, undefined)
  t.is(error.message, 'foo')
  t.end()
})

test('error without message has expected properties', function (t) {
  const error = new errors.ReadError()

  t.is(error.type, 'ReadError')
  t.is(error.name, 'ReadError')
  t.is(error.cause, undefined)
  t.is(error.message, '')
  t.end()
})

test('error with cause has expected properties', function (t) {
  const cause = new Error('foo')
  const error = new errors.ReadError(cause)

  t.is(error.type, 'ReadError')
  t.is(error.name, 'ReadError')
  t.is(error.cause, cause)
  t.is(error.message, 'foo')
  t.end()
})

test('error with message and cause has expected properties', function (t) {
  const cause = new Error('foo')
  const error = new errors.ReadError('bar', cause)

  t.is(error.type, 'ReadError')
  t.is(error.name, 'ReadError')
  t.is(error.cause, cause)
  t.is(error.message, 'bar')
  t.end()
})

test('NotFoundError has special properties', function (t) {
  const error = new errors.NotFoundError()
  t.is(error.notFound, true)
  t.is(error.status, 404)
  t.end()
})

test('error message is writable to mirror node core conventions', function (t) {
  const error = new errors.WriteError('foo')
  error.message = 'Got error: ' + error.message
  t.is(error.message, 'Got error: foo')
  t.end()
})

test('returns original instance if cause is the same type', function (t) {
  const cause = new errors.NotFoundError('Key not found in database [foo]')
  const error = new errors.NotFoundError(cause)
  t.is(cause, error, 'same instance')
  t.is(error.message, 'Key not found in database [foo]')
  t.end()
})

test('returns new instance if cause prototype is different', function (t) {
  const cause = new errors.NotFoundError('Key not found in database [foo]')
  const error = new errors.WriteError(cause)
  t.isNot(cause, error, 'new instance')
  t.is(error.message, 'Key not found in database [foo]')
  t.end()
})

test('returns original instance if message and cause are the same', function (t) {
  const cause = new errors.NotFoundError('Key not found in database [foo]')
  const error = new errors.NotFoundError('Key not found in database [foo]', cause)
  t.is(cause, error, 'same instance')
  t.end()
})

test('returns new instance if message is different', function (t) {
  const cause = new errors.NotFoundError('Key not found in database [foo]')
  const error = new errors.NotFoundError('Key not found in database [bar]', cause)
  t.isNot(cause, error, 'new instance')
  t.end()
})
