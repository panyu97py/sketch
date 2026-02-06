# @sketchjs/react

Sketch 的 React 组件封装，提供与 React 组件一致的使用体验。

## 🎯 适用场景

- Web/H5 的 Canvas 组件化渲染
- 需要 React 生态下的状态管理与组合能力

## ✨ 功能特性

- `Sketch.Root/View/Image/Text` 组件化 API
- 支持 `autoRender` 自动渲染
- 与 React Hooks 生态兼容

## 📦 安装

### npm

```sh
npm add @sketchjs/react
```

### pnpm

```sh
pnpm add @sketchjs/react
```

### yarn

```sh
yarn add @sketchjs/react
```

## 🚀 快速开始（Web/H5）

```tsx
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Sketch } from '@sketchjs/react'
import logo from './logo.png'
import './App.css'

const style = StyleSheet.create({
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

export default function App () {
  const sketch = Sketch.useSketch()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    sketch.init({ canvas, ctx })
  }, [])

  return (
    <div className="App">
      <canvas className="sketch-canvas" ref={canvasRef} />
      <Sketch.Root style={style.root} sketch={sketch} autoRender>
        <Sketch.View style={style.view}>
          <Sketch.Image src={logo} style={style.logo}/>
          <Sketch.Text text="Hello  World!" style={style.text}/>
        </Sketch.View>
      </Sketch.Root>
    </div>
  )
}
```

## 📱 小程序使用

### 配置环境变量

```ts
import { defineConfig } from '@tarojs/cli'

export default defineConfig({
  defineConstants: {
    'process.env.SKETCH_PLATFORM': '"APPLET"',
    'process.env.YOGA_USE_WASM': 'false'
  }
})
```

### 页面示例

```tsx
import { View, Canvas } from '@tarojs/components'
import { StyleSheet, Sketch } from '@sketchjs/react'
import logo from '@/assets/logo.png'
import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.less'

const style = StyleSheet.create({
  root: {
    width: 500,
    height: 500,
    backgroundColor:'#282c34'
  },
  rootView: {
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

const Index: React.FC = () => {
  const sketch = Sketch.useSketch()

  const initCanvas = async () => {
    const canvasNode: HTMLCanvasElement = await new Promise((resolve) => {
      const selectorQuery = Taro.createSelectorQuery()
      const callback = (res:any) => resolve(res?.node)
      selectorQuery.select('#sketch-canvas').fields({ node: true }, callback).exec()
    })
    const canvasCtx = canvasNode.getContext('2d')
    if (!canvasNode || !canvasCtx) return
    return sketch.init({ canvas: canvasNode, ctx: canvasCtx }).then(() => sketch.render())
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return (
    <View className='index-view'>
      <Canvas id='sketch-canvas' type='2d' className='sketch-canvas' />
      <Sketch.Root sketch={sketch} style={style.root} autoRender>
        <Sketch.View style={style.rootView}>
          <Sketch.Image src={logo} style={style.logo} />
          <Sketch.Text text='Hello  World!' style={style.text} />
        </Sketch.View>
      </Sketch.Root>
    </View>
  )
}

export default Index
```

## 📝 使用说明

- `Sketch.Root` 依赖 `sketch.init({ canvas, ctx })`
- `autoRender` 会在初始化与更新时自动渲染
- 需要手动渲染时，可关闭 `autoRender` 并调用 `sketch.render()`

## ❓ 常见问题

- 画布空白？
- 请确认 `canvas` 与 `ctx` 有效，并设置了根节点 `width/height`
