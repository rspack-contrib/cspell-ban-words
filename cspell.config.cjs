const { banWords } = require("./src/index.cjs");

module.exports = {
  version: "0.2",
  ignorePaths: [],
  dictionaryDefinitions: [],
  dictionaries: [],
  flagWords: banWords,
  import: [],
};
