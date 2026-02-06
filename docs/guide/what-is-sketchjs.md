# Sketchjs 是什么？

Sketchjs 是一个组件化的 Canvas 2D 绘图框架。它提供类似 React/Vue 组件的开发体验，让你用 JSX 或模板组织绘图元素，再由运行时完成布局计算与渲染。

你可以把它理解为“面向 Canvas 的 UI 组件系统”：不仅能绘制图形，更能像搭建界面一样组织层级与布局。

## 适用场景 {#use-cases}

- 跨端一致体验的 2D 绘图或可视化应用
- 需要组件化组织复杂图形与交互的 Canvas 项目
- 希望用 Flexbox 布局完成画布排版的场景

## 核心特性 {#main-features}

- 组件化绘图，复杂图形可复用与组合
- 跨平台支持，Web、H5、小程序（Taro）环境一致
- Yoga Layout 驱动的 Flexbox 布局
- 完整 TypeScript 类型定义与智能提示

## 设计理念 {#design-principles}

- **结构优先**：先搭建清晰的节点树，再由运行时渲染
- **布局优先**：把坐标计算交给 Yoga，减少手写布局成本
- **跨端一致**：渲染逻辑在运行时统一实现，框架层只负责挂接

## 模块构成 {#module-structure}

- `@sketchjs/runtime`：渲染运行时与绘制调度
- `@sketchjs/react`：React 组件化 API
- `@sketchjs/vue`：Vue 组件化 API
- `@sketchjs/yoga-layout`：Yoga Layout WebAssembly 版本

## 工作方式 {#how-it-works}

- `Sketch.Root` 负责持有 `canvas` 与 `ctx`，并驱动渲染
- `Sketch.View`、`Sketch.Image`、`Sketch.Text` 等节点组成渲染树
- 运行时通过 Yoga 计算布局，随后对每个节点执行渲染
- 通过 `StyleSheet.create` 统一管理样式与布局

## 渲染流程 {#render-flow}

1. 初始化 `SketchRoot` 并绑定 `canvas/ctx`
2. 构建节点树并应用样式
3. Yoga 计算布局并生成最终位置
4. 运行时依次渲染各节点

## 与原生 Canvas 的区别 {#difference-from-canvas}

- 原生 Canvas 需要手写绘制与布局逻辑
- Sketchjs 提供组件化结构和 Flexbox 布局，适合复杂 UI 的画布场景
- 你仍然保留对 Canvas 的控制权，可以在需要时定制渲染逻辑

## 平台与框架 {#platforms}

- Web / H5：直接使用运行时或框架封装
- 小程序（Taro）：通过环境变量切换运行时实现

## 能力边界 {#limitations}

- 偏向 2D 画布 UI 与排版，不是图形学引擎
- 复杂 3D 或低层像素级操作需要自行扩展渲染逻辑
