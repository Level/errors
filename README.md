# level-errors

> Error module for [levelup][levelup]

[![level badge][level-badge]](https://github.com/level/awesome)
[![npm](https://img.shields.io/npm/v/level-errors.svg?label=&logo=npm)](https://www.npmjs.com/package/level-errors)
[![Node version](https://img.shields.io/node/v/level-errors.svg)](https://www.npmjs.com/package/level-errors)
[![Build Status](https://travis-ci.org/Level/errors.svg)](https://travis-ci.org/Level/errors)
[![dependencies](https://david-dm.org/Level/level.svg)](https://david-dm.org/level/level)
[![Coverage Status](https://coveralls.io/repos/github/Level/errors/badge.svg)](https://coveralls.io/github/Level/errors)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dm/level-errors.svg?label=dl)](https://www.npmjs.com/package/level-errors)
[![Backers on Open Collective](https://opencollective.com/level/backers/badge.svg?color=orange)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/level/sponsors/badge.svg?color=orange)](#sponsors)

## API

### `.LevelUPError()`

Generic error base class.

### `.InitializationError()`

Error initializing the database, like when the database's location argument is missing.

### `.OpenError()`

Error opening the database.

### `.ReadError()`

Error reading from the database.

### `.WriteError()`

Error writing to the database.

### `.NotFoundError()`

Data not found error.

Has extra properties:

- `notFound`: `true`
- `status`: 404

### `.EncodingError()`

Error encoding data.

## Contributing

[`Level/errors`](https://github.com/Level/errors) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

To sustain [`Level`](https://github.com/Level) and its activities, become a backer or sponsor on [Open Collective](https://opencollective.com/level). Your logo or avatar will be displayed on our 28+ [GitHub repositories](https://github.com/Level), [npm](https://www.npmjs.com/) packages and (soon) [our website](http://leveldb.org). 💖

### Backers

[![Open Collective backers](https://opencollective.com/level/backers.svg?width=890)](https://opencollective.com/level)

### Sponsors

[![Open Collective sponsors](https://opencollective.com/level/sponsors.svg?width=890)](https://opencollective.com/level)

## License

[MIT](LICENSE.md) © 2012-present [Contributors](CONTRIBUTORS.md).

[level-badge]: http://leveldb.org/img/badge.svg

[levelup]: https://github.com/level/levelup
