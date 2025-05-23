module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  rules: {
    'react/jsx-indent': ['error', 2], // 标签使用 2 个空格缩进
    'react/jsx-indent-props': ['error', 2] // 属性使用 2 个空格缩进
  }
}
