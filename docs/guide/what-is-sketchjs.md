# Sketchjs 是什么？
Sketchjs 是一个组件化的 Canvas 2D 绘图框架，用 React/Vue 的写法完成跨端 Canvas 开发。

## 适用场景 {#use-cases}

- 跨端一致体验的 2D 绘图/可视化应用。
- 需要组件化组织复杂图形与交互的 Canvas 项目。

## 核心特性 {#main-features}

- **组件化绘图**：像写 React Native 一样组织绘图逻辑，复杂图形可组件化复用与组合。
- **跨平台支持**：同一套代码运行在 Web、H5、小程序（含 Taro）等环境，开发体验一致。
- **高性能布局**：内置 Yoga Layout，使用 **Flexbox** 模型自动完成布局计算与排版。
- **TypeScript 友好**：提供完整类型定义与智能提示，便于大型项目维护。

## 模块构成 {#module-structure}

- `@sketchjs/runtime`：渲染运行时与绘制调度。
- `@sketchjs/react`：对接 React 实现组件化 API。
- `@sketchjs/vue`：对接 Vue 实现组件化 API。
- `@sketchjs/yoga-layout`：提供基于 Yoga 的布局计算能力。

