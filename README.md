# @ianwalter/find-nested
> A utility that searches through nested layers for values

## About

`findNested` and `findAllNested` are a couple of simple recursive functions that
return the first value or all values (respectively) that are assigned to a given
key and/or pass a given filter function. I wrote this in order to more easily
retrieve values from JSON objects with multiple layers of nesting that were
generated from converting API Blueprints to JSON with [blueline][bluelineUrl].

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

// Returns all objects in an array (thats why the key name is undefined) that
// have a headers property with an array that contains at least one object with
// a value property that includes the string 'json'.
const hasJsonBody = obj => obj.headers.some(h => h.value.includes('json'))
findAllNested(obj, undefined, hasJsonBody)
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[bluelineUrl]: https://github.com/ianwalter/blueline
[licenseUrl]: https://github.com/ianwalter/find-nested/blob/master/LICENSE
