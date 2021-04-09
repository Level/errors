const test = require('tape')
const errors = require('./')

test('all errors are instances of LevelUPError', function (t) {
  const LevelUPError = errors.LevelUPError
  const keys = Object.keys(errors)

  keys.forEach(function (key) {
    t.ok(new errors[key]() instanceof LevelUPError)
  })

  t.end()
})

test('NotFoundError has special properties', function (t) {
  const error = new errors.NotFoundError()
  t.equal(error.notFound, true)
  t.equal(error.status, 404)
  t.end()
})
