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
import React, {useEffect} from 'react';
import {SketchHandler, StyleSheet, Sketch} from '@sketchjs/react'
import logo from './logo.png';
import './App.css';

const style = StyleSheet.create({
    root: {
        width: 500,
        height: 500,
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

function App() {

    const sketchRef = React.useRef<SketchHandler>(null)

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    const handleSketchReady = () => {
        console.log('sketch ready')
        sketchRef.current?.render()?.then(() => console.log('rendered'))
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return
        sketchRef.current?.init(canvas, ctx)
    }, []);

    return (
        <div className="App">
            <canvas className="sketch-canvas" ref={canvasRef}/>
            <Sketch.Root style={style.root} ref={sketchRef}  onSketchReady={handleSketchReady}>
                <Sketch.View style={style.rootView}>
                    <Sketch.Image src={logo} style={style.logo}/>
                    <Sketch.Text text="Hello  World!" style={style.text}/>
                </Sketch.View>
            </Sketch.Root>
        </div>
    );
}

export default App;

```

### Taro 小程序使用`sketch`实现`Canvas` 2d 绘图

### Taro 小程序使用`sketch`实现`Canvas` 2d 绘图

```tsx
import { View, Canvas } from '@tarojs/components'
import { SketchHandler, StyleSheet, Sketch } from '@sketchjs/react'
import logo from '@/assets/logo.png'
import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.less'

const style = StyleSheet.create({
  root: {
    width: 500,
    height: 500,
  },
  rootView: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#282c34'
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

  const sketchRef = React.useRef<SketchHandler>(null)

  const handleSketchReady = () => {
    console.log('sketch ready')
    sketchRef.current?.render()?.then(() => console.log('rendered'))
  }

  const initCanvas = async () => {
    const canvasNode: Taro.Canvas = await new Promise((resolve) => {
      Taro.createSelectorQuery().select('#sketch-canvas').fields({ node: true }, (res) => resolve(res?.node)).exec()
    })
    const canvasCtx = canvasNode.getContext('2d')
    sketchRef.current?.init(canvasNode as any, canvasCtx as any)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return (
    <View className='index-view'>
      <Canvas id='sketch-canvas' type='2d' className='sketch-canvas' />
      <Sketch.Root style={style.root} ref={sketchRef} onSketchReady={handleSketchReady}>
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



### 待办事项
- [x] 核心依赖[`yoga-layout`](https://www.yogalayout.dev/)
- [x] `web`端 `example` 完善
- [x] 小程序能力完善
- [ ] README.md 完善
- [ ] 单元测试
