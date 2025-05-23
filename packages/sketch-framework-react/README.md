# sketch - 绘图工具

实现像写 RN 一样完成 canvas 2d 绘图

### 安装

#### 使用`npm`安装
```shell
npm install @sketchjs/react
```
#### 使用`yarn`安装
```shell
yarn add @sketchjs/react
```

#### 使用`pnpm`安装
```shell
pnpm add @sketchjs/react
```

### H5 使用`sketch`实现`Canvas` 2d 绘图
```tsx
import React, { useEffect } from 'react'
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

function App () {
  const sketch = Sketch.useSketch()

  const canvasRef = React.useRef<HTMLCanvasElement>(null)

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

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    sketch.init({ canvas, ctx })
  }, [])

  return (
    <div className="App" onClick={handleToDataURL}>
      <canvas className="sketch-canvas" ref={canvasRef}/>
      <Sketch.Root style={style.root} sketch={sketch} onReady={handleSketchInitialized} onUpdate={handleSketchUpdate}>
        <Sketch.View style={style.view}>
          <Sketch.Image src={logo} style={style.logo}/>
          <Sketch.Text text="Hello  World!" style={style.text}/>
        </Sketch.View>
      </Sketch.Root>
    </div>
  )
}

export default App
```

### Taro 小程序使用`sketch`实现`Canvas` 2d 绘图

```ts
import { defineConfig } from '@tarojs/cli'

export default defineConfig({
  defineConstants: {
    'process.env.SKETCH_PLATFORM': '"APPLET"',  // 使用小程序端 sketch 实现
    'process.env.YOGA_USE_WASM': 'false',  // 不使用 WASM 实现
  },
})

```

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
    alignItems: 'center',
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

  const handleSketchReady = () => {
    sketch.render()
  }

  const initCanvas = async () => {
    const canvasNode: HTMLCanvasElement = await new Promise((resolve) => {
      const selectorQuery = Taro.createSelectorQuery()
      const callback = (res:any) => resolve(res?.node)
      selectorQuery.select('#sketch-canvas').fields({ node: true },callback).exec()
    })
    const canvasCtx = canvasNode.getContext('2d')
    if (!canvasNode || !canvasCtx) return
    return sketch.init({canvas:canvasNode, ctx: canvasCtx}).then(()=>sketch.render())
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return (
    <View className='index-view'>
      <Canvas id='sketch-canvas' type='2d' className='sketch-canvas' />
      <Sketch.Root sketch={sketch} style={style.root} onReady={handleSketchReady}>
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
