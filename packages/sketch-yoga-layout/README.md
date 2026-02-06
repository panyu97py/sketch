# @sketchjs/yoga-layout

> 基于 [`yoga-layout`](https://www.yogalayout.dev/) 编译的 WebAssembly 版本，专为 Sketch.js 框架优化，支持在浏览器和 Node.js 环境中使用 Flexbox 布局引擎。

## 🎯 适用场景

- 需要在浏览器中使用 Yoga Layout
- 需要在 Node.js 中进行布局计算

## ✨ 特性

- 🚀 **高性能**: 使用 WebAssembly 编译的 Yoga 布局引擎
- 📱 **跨平台**: 支持浏览器和 Node.js 环境
- 🔧 **TypeScript**: 完整的 TypeScript 类型定义
- 📐 **Flexbox**: 完整的 Flexbox 布局算法实现
- 🎯 **轻量级**: 优化的二进制文件大小

## 📦 安装

### npm

```bash
npm install @sketchjs/yoga-layout
```

### pnpm

```bash
pnpm add @sketchjs/yoga-layout
```

### yarn

```bash
yarn add @sketchjs/yoga-layout
```

## 🚀 快速开始

### 在浏览器中使用

```javascript
import { loadYoga } from '@sketchjs/yoga-layout';

// 加载 Yoga 布局引擎
const Yoga = await loadYoga();

// 创建根节点
const root = Yoga.Node.create();
root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(Yoga.JUSTIFY_CENTER);

// 创建子节点
const child = Yoga.Node.create();
child.setWidth(100);
child.setHeight(100);

// 添加子节点
root.insertChild(child, 0);

// 计算布局
root.calculateLayout(500, 300, Yoga.DIRECTION_LTR);

// 获取布局结果
console.log('Child layout:', {
  left: child.getComputedLeft(),
  top: child.getComputedTop(),
  width: child.getComputedWidth(),
  height: child.getComputedHeight()
});
```

### 在 Node.js 中使用

```javascript
const { loadYoga } = require('@sketchjs/yoga-layout');

async function calculateLayout() {
  const Yoga = await loadYoga();
  
  const root = Yoga.Node.create();
  root.setWidth(400);
  root.setHeight(400);
  root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  
  const child1 = Yoga.Node.create();
  child1.setWidth(100);
  child1.setHeight(100);
  
  const child2 = Yoga.Node.create();
  child2.setWidth(100);
  child2.setHeight(100);
  
  root.insertChild(child1, 0);
  root.insertChild(child2, 1);
  
  root.calculateLayout(400, 400, Yoga.DIRECTION_LTR);
  
  console.log('Layout calculated successfully');
}

calculateLayout();
```

## 📖 API 参考

### 主要函数

#### `loadYoga(): Promise<Yoga>`
加载 Yoga 布局引擎，返回 Yoga 实例。

#### `loadYogaNoWasm(): Yoga`
加载不使用 WebAssembly 的 Yoga 版本（如果可用）。

### 核心类

#### `Yoga.Node`
布局节点类，用于创建和管理布局节点。

**主要方法：**
- `create(): Node` - 创建新节点
- `setWidth(width: number): void` - 设置宽度
- `setHeight(height: number): void` - 设置高度
- `setFlexDirection(direction: number): void` - 设置 Flex 方向
- `insertChild(child: Node, index: number): void` - 插入子节点
- `calculateLayout(width: number, height: number, direction: number): void` - 计算布局

### 枚举值

布局相关的枚举值可通过 `Yoga` 对象访问：

- `FLEX_DIRECTION_ROW` / `FLEX_DIRECTION_COLUMN`
- `JUSTIFY_CENTER` / `JUSTIFY_FLEX_START` / `JUSTIFY_FLEX_END`
- `ALIGN_CENTER` / `ALIGN_FLEX_START` / `ALIGN_FLEX_END`
- `DIRECTION_LTR` / `DIRECTION_RTL`

完整的枚举定义请参考 `src/generated/YGEnums.d.ts`。

## 🛠️ 编译说明

### 前提条件

- Emscripten SDK 已安装并配置
- CMake 3.13 或更高版本
- Node.js 开发环境

### 编译流程

1. **准备 yoga-layout 源码**
   ```bash
   git clone https://github.com/facebook/yoga.git
   cd yoga
   ```

2. **复制编译配置**
   ```bash
   cp packages/sketch-yoga-layout/CMakeLists.txt javascript/CMakeLists.txt
   ```

3. **执行编译**
   ```bash
   cd javascript
   npm run build
   ```

4. **更新二进制文件**
   ```bash
   cp binaries/* ../packages/sketch-yoga-layout/binaries/
   ```

### 编译选项

编译配置支持以下优化选项：

- **LTO (Link Time Optimization)**: 启用链接时优化
- **异常处理**: 禁用 C++ 异常以减小体积
- **RTTI**: 禁用运行时类型信息
- **调试信息**: 生产环境禁用调试符号
- **内存管理**: 使用 emmalloc 内存分配器

## 🗂️ 文件结构

```
sketch-yoga-layout/
├── binaries/           # 编译后的二进制文件
│   ├── yoga-base64.cjs    # CommonJS 版本
│   ├── yoga-base64.mjs    # ES Module 版本
│   ├── yoga-wasm-base64.cjs
│   └── yoga-wasm-base64.mjs
├── src/                # 源代码
│   ├── generated/      # 自动生成的枚举定义
│   ├── index.js        # 主入口文件
│   └── *.d.ts         # TypeScript 类型定义
├── CMakeLists.txt      # 编译配置文件
└── package.json        # 包配置
```

## ⚡ 性能优化

- **单文件打包**: 使用 `SINGLE_FILE=1` 将 WASM 内联到 JavaScript 中
- **内存优化**: 启用 `ALLOW_MEMORY_GROWTH=1` 支持动态内存增长
- **体积优化**: 使用 `-Os` 优化级别和 LTO 减小文件体积
- **安全优化**: 禁用动态代码执行 (`DYNAMIC_EXECUTION=0`)

## 🌐 浏览器兼容性

- Chrome 57+
- Firefox 52+
- Safari 11+
- Edge 16+

需要支持 WebAssembly 的现代浏览器。

## ⚠️ 注意事项

- 浏览器环境推荐使用 `loadYoga()` 异步加载
- 若不使用 WASM，可尝试 `loadYogaNoWasm()` 作为降级方案

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔗 相关链接

- [Sketch.js 主项目](https://github.com/panyu97py/sketch)
- [Yoga Layout 官方文档](https://yogalayout.dev/)
