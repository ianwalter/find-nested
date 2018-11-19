# @ianwalter/find-nested
> A utility that searches through nested layers for values

## About

`findNested` is a simple recursive function that returns the first value found
that is assigned to a given key and/or passes a given descriminator function.
I wrote this in order to more easily retrieve values from JSON objects with
multiple layers of nesting that were generated from converting API Blueprints to
JSON with [blueline](https://github.com/ianwalter/blueline).

## Installation

```console
npm install @ianwalter/find-nested --save
```

## Usage

```js
const { findNested, findAllNested } = require('@ianwalter/find-nested')

// Return the first value for someKeyName in obj:
findNested(obj, 'someKeyName')

// Return the first value for soneKeyName in obj that also causes the given
// descriminator function to return true:
findNested(obj, 'someKeyName', val => val.isActive)

// Returns all instances in an array (thats why the key name is null) that have
// a body property, a headers property, the headers property is an array, and
// the headers property contains at least one object with a value property that
// includes the string 'application/json'.
const hasJsonBody = obj => obj.body &&
  obj.headers &&
  Array.isArray(obj.headers) &&
  obj.headers.some(header => header.value.includes('application/json'))
findAllNested(obj, null, hasJsonBody)
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[licenseUrl]: https://github.com/ianwalter/find-nested/blob/master/LICENSE
