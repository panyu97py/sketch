# 快速开始（React）

## 前置准备 {#prerequisites}

- React 16.8+（需要 Hooks）
- 支持 Canvas 的浏览器环境

## 适用场景 {#use-cases}

- React 项目中的 Canvas UI
- 需要组件化组织复杂绘图

## 安装 {#installation}

::: code-group

```sh [npm]
$ npm add @sketchjs/react
```

```sh [pnpm]
$ pnpm add @sketchjs/react
```

```sh [yarn]
$ yarn add @sketchjs/react
```

```sh [bun]
$ bun add @sketchjs/react
```

:::

## 基础用法 {#example}

::: code-group
```tsx [App.tsx]
import React, { useEffect, useRef } from 'react'
import { Sketch } from '@sketchjs/react'
import { styleSheet } from './styleSheet'
import logo from './logo.png'

function App () {
  const sketch = Sketch.useSketch()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleToDataURL = () => {
    const dataUrl = sketch.toDataURL('image/png', 1)
    console.log({ dataUrl })
  }

  const handleSketchUpdate = () => {
    console.log('sketch update')
  }

  const handleSketchInitialized = () => {
    console.log('sketch initialized')
  }

  const initSketch = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    return sketch.init({ canvas, ctx })
  }

  useEffect(() => {
    initSketch()
  }, [])

  return (
    <div className="App" onClick={handleToDataURL}>
      <canvas className="sketch-canvas" ref={canvasRef}/>
      <Sketch.Root 
        autoRender
        sketch={sketch}
        style={styleSheet.root} 
        onReady={handleSketchInitialized} 
        onUpdate={handleSketchUpdate}>
        <Sketch.View style={styleSheet.view}>
          <Sketch.Image src={logo} style={styleSheet.logo}/>
          <Sketch.Text text="Hello  World!" style={styleSheet.text}/>
        </Sketch.View>
      </Sketch.Root>
    </div>
  )
}

export default App
```

```ts [styleSheet.ts]
import { StyleSheet } from '@sketchjs/react'

export const styleSheet = StyleSheet.create({
  root: {
    width: 500,
    height: 500,
    backgroundColor: '#282c34'
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
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 400,
    lineHeight: 50,
    textAlign: 'center'
  }
})
```

:::

## 使用说明 {#notes}

- `Sketch.Root` 需要传入 `sketch` 实例，并在 `init` 完成后开始渲染
- 设置 `autoRender` 后，初始化与更新会自动触发 `render`
- Canvas 的像素尺寸由 `Sketch.Root` 的样式决定，建议明确 `width/height`
- 若需要手动控制渲染时机，设置 `autoRender={false}` 并调用 `sketch.render()`

## 配置提示 {#config}

- 若需要异步加载或跨端能力，请结合 Taro 与对应插件配置

## 初始化流程 {#init-flow}

1. `Sketch.useSketch()` 创建实例
2. 获取 `canvas` 与 `ctx`
3. 调用 `sketch.init({ canvas, ctx })`
4. 在 `Sketch.Root` 中挂载节点树并渲染

## 常见问题 {#faq}

- 为什么画布是空白的？
- 请确认 `canvas` 和 `ctx` 都有效，并且 `Sketch.Root` 设置了 `width/height`
- 组件更新后没有重新渲染？
- 开启 `autoRender` 或在更新后手动调用 `sketch.render()`
