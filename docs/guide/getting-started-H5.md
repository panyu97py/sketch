# 快速开始（H5）

## 安装 {#installation}

### 前置准备 {#prerequisites}

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

## 示例代码 {#example}

::: code-group
```typescript [example.ts]
import { SketchRoot, SketchText, SketchView, StyleSheet, debugOption, SketchImage } from '@sketchjs/runtime'
import { styleSheet } from './stylesheet'
import logo from './assets/logo.png'
import './styles.less'

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

```typescript [stylesheet.ts]
import { StyleSheet } from '@sketchjs/runtime'
export const styleSheet = StyleSheet.create({
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
```

:::
