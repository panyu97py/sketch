const commonConfig = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts','tsx', 'js','.jsx', 'json'], // 支持的文件扩展名
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'], // 匹配所有测试文件
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // 配置 @ 路径别名
    '@sketchjs/react': '<rootDir>/index.js' // 配置 @ 路径别名
  }
}

export default {
  collectCoverage: true,
  coverageReporters: ['text', 'json', 'html'], // 生成不同格式的覆盖率报告
  projects: [
    {
      ...commonConfig,
      displayName: 'applet',
      testPathIgnorePatterns: ['/src/platform-web'],
      setupFiles: [
        '<rootDir>/jest.env.applet.ts',
        'jest-canvas-mock'
      ],
    },
    {
      ...commonConfig,
      displayName: 'web',
      testPathIgnorePatterns: ['/src/platform-applet'],
      setupFiles: [
        '<rootDir>/jest.env.web.ts',
        'jest-canvas-mock'
      ],
    },
  ],
}
