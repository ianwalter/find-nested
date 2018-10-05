# @ianwalter/find-key
> A utility that searches through nested layers for a keyed value

## About

`findKey` is a simple recursive function that returns the first value found that
is assigned to a key that matches the given key. I wrote this in order to
more easily retrieve values with unique keys from JSON objects with multiple
layers of nesting that were generated from converting API Blueprints to JSON
through [blueline](https://github.com/ianwalter/blueline).

## Installation

```console
npm install @ianwalter/find-key
```

## Usage

```js
const findKey = require('@ianwalter/find-key')

findKey(obj, 'someKeyName')
```

&nbsp;

ISC &copy; [Ian Walter](http://iankwalter.com)
