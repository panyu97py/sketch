module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/jsx-indent': ['error', 2], // 标签使用 2 个空格缩进
    'react/jsx-indent-props': ['error', 2], // 属性使用 2 个空格缩进
    'no-use-before-define': 'off'
  }
}
