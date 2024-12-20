# level-errors

**Superseded by [`abstract-level`](https://github.com/Level/abstract-level). Please see [Frequently Asked Questions](https://github.com/Level/community#faq).**

## API

**If you are upgrading:** please see [`UPGRADING.md`](UPGRADING.md).

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

## License

[MIT](LICENSE)

[levelup]: https://github.com/Level/levelup
