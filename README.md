<div align="center">
  <h1>🎨 Sketch</h1>
  <p>组件化的 Canvas 2D 绘图框架，支持 Vue / React，可在小程序与 Web 上使用</p>

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

## 📖 简介

Sketch 是一个组件化的 Canvas 2D 绘图框架。你可以像写 React Native 一样组织绘图逻辑，用组件和样式完成布局、排版与渲染，并在
Web、H5、小程序等环境中复用一套绘图代码。

### 核心特性

- 🎯 **组件化绘图** - 使用熟悉的组件语法管理复杂 Canvas 绘图逻辑
- 📱 **跨平台支持** - 一套代码在 Web、H5、小程序中运行
- 🎨 **Flexbox 布局** - 基于 Yoga Layout 的强大布局系统
- 🚀 **高性能渲染** - 优化的渲染调度和事件处理
- 💪 **TypeScript 支持** - 完整的类型定义和开发体验

###  为什么使用 Sketch

- 用组件结构管理复杂绘图，避免到处散落的 Canvas 指令
- 使用 Flexbox 布局直接完成排版，无需手写坐标计算
- 运行时与框架解耦，Web/H5/小程序保持一致的渲染逻辑

###  功能概览

- 渲染树：Root/View/Text/Image 等基础节点
- 布局系统：Yoga Layout + Flexbox
- 样式系统：StyleSheet 管理样式与布局
- 事件系统：初始化与节点更新事件

###  特性

- 组件化绘图，复杂图形可复用与组合
- 跨平台支持，Web/H5/小程序一致的开发体验
- Yoga Layout 驱动的 Flexbox 布局
- 完整 TypeScript 类型定义

###  架构概览

- `@sketchjs/runtime`：运行时核心，维护渲染树、布局与绘制
- `@sketchjs/react` / `@sketchjs/vue`：框架层封装，负责组件渲染与生命周期对接
- `@sketchjs/yoga-layout`：Yoga 布局引擎的 WebAssembly 版本

## 📱 平台兼容

| 平台       | 支持状态   | 说明              |
|----------|--------|-----------------|
| Web / H5 | ✅ 完全支持 | 使用标准 Canvas API |
| 微信小程序    | ✅ 支持   | 通过 Taro 等框架适配   |
| 支付宝小程序   | ✅ 支持   | 通过 Taro 等框架适配   |

## 💡 核心概念

### 渲染树结构

Sketch 使用类似 React Native 的渲染树结构：

```
Sketch.Root
├── Sketch.View
│   ├── Sketch.Text
│   ├── Sketch.Image
│   └── Sketch.View
└── Sketch.View
```

### 布局系统

基于 [Yoga Layout](https://yogalayout.com/) 的 Flexbox 布局引擎：

- 支持 `flexDirection`, `justifyContent`, `alignItems` 等属性
- 自动计算元素位置和尺寸
- 响应式布局支持

### 样式系统

使用 `StyleSheet.create()` 创建样式对象：

```ts
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold'
  }
})
```

## 📦 包说明

| 包名                                                                 | 版本                                                                                                                    | 描述                         |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|----------------------------|
| [`@sketchjs/runtime`](./packages/sketch-runtime/README.md)         | [![npm](https://img.shields.io/npm/v/@sketchjs/runtime.svg)](https://www.npmjs.com/package/@sketchjs/runtime)         | 运行时核心与渲染调度                 |
| [`@sketchjs/react`](./packages/sketch-framework-react/README.md)   | [![npm](https://img.shields.io/npm/v/@sketchjs/react.svg)](https://www.npmjs.com/package/@sketchjs/react)             | React 组件封装                 |
| [`@sketchjs/vue`](./packages/sketch-framework-vue/README.md)       | [![npm](https://img.shields.io/npm/v/@sketchjs/vue.svg)](https://www.npmjs.com/package/@sketchjs/vue)                 | Vue 组件封装                   |
| [`@sketchjs/yoga-layout`](./packages/sketch-yoga-layout/README.md) | [![npm](https://img.shields.io/npm/v/@sketchjs/yoga-layout.svg)](https://www.npmjs.com/package/@sketchjs/yoga-layout) | Yoga Layout WebAssembly 版本 |


## 🚀 快速开始

### 安装

根据你的框架选择安装对应的包：

#### **React**

##### npm

```sh
npm add @sketchjs/react
```

##### pnpm

```sh
pnpm add @sketchjs/react
```

##### yarn

```sh
yarn add @sketchjs/react
```

#### **Vue**

##### npm

```sh
npm add @sketchjs/vue
```

##### pnpm

```sh
pnpm add @sketchjs/vue
```

##### yarn

```sh
yarn add @sketchjs/vue
```

#### **仅运行时（高级用法）**

##### npm

```sh
npm add @sketchjs/runtime
```

##### pnpm

```sh
pnpm add @sketchjs/runtime
```

##### yarn

```sh
yarn add @sketchjs/runtime
```

### 示例（React）

```tsx
import React, { useEffect, useRef } from 'react'
import { Sketch, StyleSheet } from '@sketchjs/react'

const styles = StyleSheet.create({
  root: {
    width: 500,
    height: 500,
    backgroundColor: '#ffffff'
  },
  view: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 36,
    color: '#333333'
  }
})

export default function App () {
  const sketch = Sketch.useSketch()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    sketch.init({
      canvas,
      ctx
    })
  }, [])

  return (
    <div>
      <canvas ref={canvasRef}/>
      <Sketch.Root sketch={sketch} autoRender style={styles.root}>
        <Sketch.View style={styles.view}>
          <Sketch.Text text="Hello Sketch" style={styles.text}/>
        </Sketch.View>
      </Sketch.Root>
    </div>
  )
}
```

### 示例（Vue）

```vue

<template>
  <div>
    <canvas ref="canvasRef"/>
    <SketchRoot :sketch="sketch" :auto-render="true" :style="styles.root">
      <SketchView :style="styles.view">
        <SketchText text="Hello Sketch" :style="styles.text"/>
      </SketchView>
    </SketchRoot>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useSketch, SketchRoot, SketchView, SketchText, StyleSheet } from '@sketchjs/vue'

  const styles = StyleSheet.create({
    root: {
      width: 500,
      height: 500,
      backgroundColor: '#ffffff'
    },
    view: {
      width: 500,
      height: 500,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 36,
      color: '#333333'
    }
  })

  const sketch = useSketch()
  const canvasRef = ref<HTMLCanvasElement>()

  onMounted(() => {
    const canvas = canvasRef.value
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    sketch.init({
      canvas,
      ctx
    })
  })
</script>
```

## 🔧 进阶用法

### 手动渲染控制

当 `autoRender` 设置为 `false` 时，需要手动控制渲染：

```tsx
const sketch = Sketch.useSketch()

// 手动触发渲染
sketch.render()

// 批量更新后渲染
sketch.batchUpdate(() => {
  // 多个更新操作
  element1.updateStyle(newStyle1)
  element2.updateStyle(newStyle2)
})
sketch.render()
```

### 事件处理

监听元素布局和更新事件：

```tsx
<Sketch.View
  style={styles.view}
  onLayout={(layout) => {
    console.log('布局完成:', layout)
  }}
  onUpdate={(element) => {
    console.log('元素更新:', element)
  }}
>
  <Sketch.Text text="可交互文本"/>
</Sketch.View>
```

### 自定义元素

通过扩展基础元素创建自定义组件：

```ts
import { SketchElement } from '@sketchjs/runtime'

class CustomElement extends SketchElement {
  render (ctx: CanvasRenderingContext2D) {
    // 自定义绘制逻辑
    ctx.fillStyle = this.style.backgroundColor || '#000'
    ctx.fillRect(this.layout.left, this.layout.top, this.layout.width, this.layout.height)
  }
}
```



## ❓ 常见问题

### Q: Sketch.Root 的尺寸设置有什么要求？

A: `Sketch.Root` 的 `width/height` 决定了画布的像素尺寸，应与 Canvas 元素的实际尺寸一致。

### Q: 如何在小程序中使用？

A: 通过 Taro 等跨端框架，使用对应的运行时适配器。

### Q: 支持哪些图片格式？

A: 支持常见的图片格式（PNG、JPEG、GIF、WebP），具体取决于运行环境的支持情况。



## ❤️ 支持项目 / Sponsor

如果你觉得 Sketch 对你有帮助，欢迎通过以下方式支持项目：


### ☕️ 请作者喝杯咖啡

如果这个项目对你有帮助，可以请作者喝杯咖啡 ☕
每一份支持，都会转化为更稳定、更好用的优化方案。

|                           微信                            |                           支付宝                           |
|:-------------------------------------------------------:|:-------------------------------------------------------:|
| <img src="./assets/wechat-pay-code.JPG" height="200" /> | <img src="./assets/alipay-pay-code.JPG" height="200" /> |

感谢你的支持，开源不易 ❤️

### 🌟 其他支持方式

* 给仓库点一个 ⭐️
* 在 issue / discussion 分享你的使用反馈
* 在团队或社区中推荐本项目

这些都会对项目非常有帮助 🙌

## 📄 许可证

MIT License
