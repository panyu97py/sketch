export default {
  preset: 'ts-jest', // 使用 ts-jest 处理 TypeScript
  testEnvironment: 'node', // 运行环境，可改为 "jsdom" 用于前端测试
  collectCoverage: true, // 启用覆盖率报告
  coverageReporters: ['text', 'json', 'html'], // 生成不同格式的覆盖率报告
  moduleFileExtensions: ['ts', 'js', 'json'], // 支持的文件扩展名
  testMatch: ['**/__tests__/**/*.test.ts'] // 匹配所有测试文件
}
