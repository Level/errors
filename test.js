'use strict'

const test = require('tape')
const errors = require('.')

test('all errors are instances of LevelUPError', function (t) {
  const LevelUPError = errors.LevelUPError
  const keys = Object.keys(errors)

  keys.forEach(function (key) {
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
  // t.is(error.message, '') // TODO: bug
  t.end()
})

test('error with cause has expected properties', function (t) {
  const cause = new Error('foo')
  const error = new errors.ReadError(cause)

  t.is(error.type, 'ReadError')
  t.is(error.name, 'ReadError')
  // t.ok(error.cause === cause) // TODO: bug in errno
  t.is(error.message, 'foo')
  t.end()
})

test('error with message and cause has expected properties', function (t) {
  const cause = new Error('foo')
  const error = new errors.ReadError('bar', cause)

  t.is(error.type, 'ReadError')
  t.is(error.name, 'ReadError')
  t.ok(error.cause === cause)
  t.is(error.message, 'bar')
  t.end()
})

test('NotFoundError has special properties', function (t) {
  const error = new errors.NotFoundError()
  t.is(error.notFound, true)
  t.is(error.status, 404)
  t.end()
})

test.skip('error message is writable', function (t) {
  // TODO: bug in prr? Given shorthand 'ewr', the effective options are:
  // { enumerable: false, configurable: false, writable: false }
  // Let's keep enumerable as-is, but set configurable and writable for flexibility.
  // That's also the same as the `message` property of a new Error('foo').

  const error = new errors.WriteError('foo')
  error.message = 'Got error: ' + error.message
  t.is(error.message, 'Got error: foo')
  t.end()
})
