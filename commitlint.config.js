module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // https://juejin.cn/post/6983191125242675230
    'type-enum': [2, 'always', [
      'build', 'ci', 'perf', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert', 'test'
    ]]
  }
}
