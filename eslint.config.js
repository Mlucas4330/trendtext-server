const globals = require('globals')

module.exports = [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    rules: {
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'semi': ['error', 'never'],
      'no-extra-semi': 'error'
    }
  }
]