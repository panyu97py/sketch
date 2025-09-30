import { merge } from 'lodash'

const commonConfig = {
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'], // 支持的文件扩展名
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'], // 匹配所有测试文件
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^@sketchjs/vue$': '<rootDir>/src/index.ts',
    '^@vue/test-utils$': '@vue/test-utils',
    '^@/(.*)$': '<rootDir>/src/$1' // 配置 @ 路径别名
  }
}

const appletProjectConfig = merge(commonConfig, {
  displayName: 'applet',
  testPathIgnorePatterns: ['/src/platform-web'],
  setupFiles: [
    '<rootDir>/jest.env.applet.ts',
    'jest-canvas-mock'
  ]
})

const webProjectConfig = merge(commonConfig, {
  displayName: 'web',
  testPathIgnorePatterns: ['/src/platform-applet'],
  setupFiles: [
    '<rootDir>/jest.env.web.ts',
    'jest-canvas-mock'
  ]
})

export default {
  collectCoverage: true,
  coverageReporters: ['text', 'json', 'html'], // 生成不同格式的覆盖率报告
  projects: [appletProjectConfig, webProjectConfig]
}
