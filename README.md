<div align="center">
  <h1>🎨 Sketch</h1>
  <p>Canvas 绘图工具，支持 Vue / React，可在小程序与 Web 上使用</p>

  <a href="https://www.npmjs.com/package/@sketchjs/runtime">
    <img src="https://img.shields.io/npm/v/@sketchjs/runtime.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@sketchjs/runtime">
    <img src="https://img.shields.io/npm/l/@sketchjs/runtime.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@sketchjs/runtime">
    <img src="https://img.shields.io/npm/dt/@sketchjs/runtime.svg?style=flat-square">
  </a>
  <a href="https://codecov.io/gh/panyu97py/sketch" > 
  <img src="https://codecov.io/gh/panyu97py/sketch/graph/badge.svg?token=y06kPnzJaQ"/> 
  </a>
  <a href="https://github.com/panyu97py/sketch">
    <img src="https://img.shields.io/github/commit-activity/w/panyu97py/sketch" alt="GitHub commit activity">
  </a>
</div>

## 简介

Sketch 是一个组件化的 Canvas 2D 绘图框架。你可以像写 React Native 一样组织绘图逻辑，用组件和样式完成布局、排版与渲染，并在 Web、H5、小程序等环境中复用一套绘图代码。

## 为什么使用 Sketch

- 用组件结构管理复杂绘图，避免到处散落的 Canvas 指令
- 使用 Flexbox 布局直接完成排版，无需手写坐标计算
- 运行时与框架解耦，Web/H5/小程序保持一致的渲染逻辑

## 功能概览

- 渲染树：Root/View/Text/Image 等基础节点
- 布局系统：Yoga Layout + Flexbox
- 样式系统：StyleSheet 管理样式与布局
- 事件系统：初始化与节点更新事件

## 特性

- 组件化绘图，复杂图形可复用与组合
- 跨平台支持，Web/H5/小程序一致的开发体验
- Yoga Layout 驱动的 Flexbox 布局
- 完整 TypeScript 类型定义

## 架构概览

- `@sketchjs/runtime`：运行时核心，维护渲染树、布局与绘制
- `@sketchjs/react` / `@sketchjs/vue`：框架层封装，负责组件渲染与生命周期对接
- `@sketchjs/yoga-layout`：Yoga 布局引擎的 WebAssembly 版本

## 快速开始

### 安装

```sh
npm add @sketchjs/react
```

### 示例（React）

```tsx
import React, { useEffect, useRef } from 'react'
import { Sketch, StyleSheet } from '@sketchjs/react'

const styles = StyleSheet.create({
  root: { width: 500, height: 500, backgroundColor: '#ffffff' },
  view: { width: 500, height: 500, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 36, color: '#333333' }
})

export default function App() {
  const sketch = Sketch.useSketch()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    sketch.init({ canvas, ctx })
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} />
      <Sketch.Root sketch={sketch} autoRender style={styles.root}>
        <Sketch.View style={styles.view}>
          <Sketch.Text text="Hello Sketch" style={styles.text} />
        </Sketch.View>
      </Sketch.Root>
    </div>
  )
}
```

## 文档

- [Sketch 运行时](./packages/sketch-runtime/README.md)
- [Sketch Vue 组件](./packages/sketch-framework-vue/README.md)
- [Sketch React 组件](./packages/sketch-framework-react/README.md)
- [在线文档](./docs/index.md)

## 包说明

- `@sketchjs/runtime`：运行时核心与渲染调度
- `@sketchjs/react`：React 组件封装
- `@sketchjs/vue`：Vue 组件封装
- `@sketchjs/yoga-layout`：Yoga Layout WebAssembly 版本

## 平台兼容

- Web / H5：直接使用 `@sketchjs/runtime` 或框架封装
- 小程序（Taro）：通过环境变量切换运行时实现

## 适用场景

- 海报、海量图文排版、数据可视化
- 需要跨端一致体验的 2D 绘图 UI
- 需要把 Canvas 与组件化逻辑统一的项目

## 注意事项

- `Sketch.Root` 的 `width/height` 决定画布像素尺寸
- 关闭 `autoRender` 时需手动调用 `render`

## 许可证

MIT
