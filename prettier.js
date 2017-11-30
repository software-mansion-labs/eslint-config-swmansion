module.exports = {
  'plugins': [
    'prettier'
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'all',
      'bracketSpacing': true,
      'jsxBracketSameLine': true,
      'parser': 'babel'
    }]
  }
}
