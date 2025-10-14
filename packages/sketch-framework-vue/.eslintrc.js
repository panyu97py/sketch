module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/require-default-prop': 'off'
  }
}
