# 快速开始（H5）

## 前置准备 {#prerequisites}

- 支持 Canvas 的浏览器环境
- 构建工具可解析静态资源（图片、样式）

## 适用场景 {#use-cases}

- 纯 H5 或无框架环境
- 需要直接控制渲染流程

## 安装 {#installation}

::: code-group

```sh [npm]
$ npm add @sketchjs/runtime
```

```sh [pnpm]
$ pnpm add @sketchjs/runtime
```

```sh [yarn]
$ yarn add @sketchjs/runtime
```

```sh [bun]
$ bun add @sketchjs/runtime
```

:::

## 基础用法 {#example}

::: code-group
```ts [main.ts]
import { SketchRoot, SketchText, SketchView, StyleSheet, SketchImage } from '@sketchjs/runtime'
import logo from './assets/logo.png'
import './styles.less'

const styleSheet = StyleSheet.create({
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

  const root = SketchRoot.create({ canvas: canvasNode, ctx: canvasCtx, style: styleSheet.root })
  root.addEventListener('initialized', (event) => console.log('initialized', event))
  root.addEventListener('elementUpdate', (event) => console.log('elementUpdate', event))
  await root.init()

  const view = SketchView.create({ style: styleSheet.view })
  const image = SketchImage.create({ src: logo, style: styleSheet.logo })
  const text = SketchText.create({ text: 'Hello  World!', style: styleSheet.text })

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

:::

## 使用说明 {#notes}

- `SketchRoot.create` 需要 `canvas` 与 `ctx`，并在 `await root.init()` 后可渲染
- 样式中的 `width/height` 会直接影响 Canvas 的像素尺寸
- 若需要手动控制渲染时机，可在节点更新后调用 `root.render()`

## 初始化流程 {#init-flow}

1. 创建 `canvas` 与 `ctx`
2. `SketchRoot.create` 生成根节点
3. 调用 `root.init()` 完成挂载
4. 创建子节点并 `appendChild`
5. 调用 `root.render()` 进行渲染

## 常见问题 {#faq}

- 图片不显示？
- 请确认 `src` 能正确加载，网络资源需要允许跨域
