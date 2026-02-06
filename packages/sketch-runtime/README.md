# @sketchjs/runtime

Sketch 运行时核心，提供画布渲染、节点树管理与 Yoga 布局能力。适合在纯 H5 环境中直接使用，也可作为框架封装的基础。

## 适用场景

- 纯 H5 或业务自定义渲染环境
- 希望直接控制节点树与渲染过程
- 需要把运行时嵌入到已有框架中

## 功能特性

- 节点树管理与生命周期
- Yoga 布局计算与样式映射
- 事件系统与渲染调度

## 安装

```sh
npm add @sketchjs/runtime
```

## 基础示例

```ts
import { SketchRoot, SketchText, SketchView, StyleSheet, SketchImage } from '@sketchjs/runtime'
import logo from './assets/logo.png'
import './styles.less'

const style = StyleSheet.create({
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
  logo: {
    width: 200,
    height: 200
  },
  text: {
    width: 500,
    marginTop: 20,
    color: '#282c34',
    fontSize: 50,
    fontWeight: 400,
    lineHeight: 50,
    textAlign: 'center'
  }
})

(async () => {
  const app = document.getElementById('app')
  const canvasNode = document.createElement('canvas')
  const canvasCtx = canvasNode.getContext('2d')
  canvasNode.classList.add('canvas')
  if (!app || !canvasCtx) return

  const root = SketchRoot.create({ canvas: canvasNode, ctx: canvasCtx, style: style.root })
  root.addEventListener('initialized', (event) => console.log('initialized', event))
  root.addEventListener('elementUpdate', (event) => console.log('elementUpdate', event))
  await root.init()

  const view = SketchView.create({ style: style.view })
  const image = SketchImage.create({ src: logo, style: style.logo })
  const text = SketchText.create({ text: 'Hello  World!', style: style.text })

  await root.appendChild(view)
  await view.appendChild(image)
  await view.appendChild(text)

  app.appendChild(canvasNode)
  app.addEventListener('click', () => {
    const dataUrl = root.toDataURL('image/png', 1)
    console.log({ dataUrl })
  })

  return root.render()
})()
```

## 关键概念

- `SketchRoot`：渲染根节点，负责绑定 `canvas/ctx` 并驱动渲染
- `SketchView`：布局容器节点
- `SketchImage`：图片节点
- `SketchText`：文本节点
- `StyleSheet`：样式定义与布局映射工具

## 事件

- `initialized`：`root.init()` 完成后触发
- `elementUpdate`：节点树更新后触发

## 使用说明

- `root.init()` 需要 `canvas` 与 `ctx`
- `root.render()` 执行一次渲染，通常在节点更新后调用
- 样式中的 `width/height` 会影响 Canvas 像素尺寸

## 初始化流程

1. 创建 `canvas` 与 `ctx`
2. `SketchRoot.create` 创建根节点
3. `await root.init()` 完成挂载
4. 创建并挂载子节点
5. 调用 `root.render()` 渲染

## 常见问题

- 画布空白？
- 检查 `canvas/ctx` 是否有效，并确保根节点样式有 `width/height`
