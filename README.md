# CSpell Ban Words

A list containing all banned words, such as `slave` and `blacklist`. This package can be used in the CSpell config.

## Install

```bash
npm add cspell-ban-words -D
```

## How to use

Require this package in your `cspell.config.cjs` file:

```js
const { banWords } = require("cspell-ban-words");

module.exports = {
  flagWords: banWords,
};
```

## All words

See [index.cjs](./src/index.cjs).

## Reference

- [CSpell - Installation](https://cspell.org/docs/installation/)
