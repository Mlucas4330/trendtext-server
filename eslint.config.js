import globals from 'globals'


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'semi': ['error', 'never'],
      'no-extra-semi': 'error'
    }
  }
]