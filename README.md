# @ianwalter/find-nested
> A utility that searches through nested layers for a keyed value

## About

`findNested` is a simple recursive function that returns the first value found that
is assigned to a key that matches the given key. I wrote this in order to
more easily retrieve values with unique keys from JSON objects with multiple
layers of nesting that were generated from converting API Blueprints to JSON
through [blueline](https://github.com/ianwalter/blueline).

## Installation

```console
npm install @ianwalter/find-nested
```

## Usage

```js
const findNested = require('@ianwalter/find-nested')

// Return the first value for someKeyName in obj:
findNested(obj, 'someKeyName')

// Return the first value for soneKeyName in obj that also causes the given
// descriminator function to return true:
findNested(obj, 'someKeyName', val => val.isActive)
```

&nbsp;

ISC &copy; [Ian Walter](http://iankwalter.com)
