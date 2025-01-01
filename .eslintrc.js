module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'react'],
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-use-before-define': ['error', {
      variables: true,
      functions: false,
      classes: false // 允许类在被定义前使用
    }]
  }
}
