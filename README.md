# CSpell Ban Words

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
