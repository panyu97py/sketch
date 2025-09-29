# 快速开始（React）

## 安装 {#installation}

::: code-group

```sh [npm]
$ npm add -D @sketchjs/react@next
```

```sh [pnpm]
$ pnpm add -D @sketchjs/react@next
```

```sh [yarn]
$ yarn add -D @sketchjs/react@next
```

```sh [bun]
$ bun add -D @sketchjs/react@next
```

:::

## 创建示例 {#crate-example}

::: code-group
```tsx [example.tsx]
import { Sketch } from '@sketchjs/react'
import { styleSheet } from './styleSheet'
import logo from './logo.png'

function App () {
  const sketch = Sketch.useSketch()

  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  /**
   * 将当前 sketch 内容导出为 dataURL
   */
  const handleToDataURL = () => {
    const dataUrl = sketch.toDataURL('image/png', 1)
    console.log({ dataUrl })
  }

  /**
   * 每次 sketch 更新完成回调
   */
  const handleSketchUpdate = () => {
    console.log('sketch update')
  }

  /**
   * sketch 初始化完成回调
   */
  const handleSketchInitialized = () => {
    console.log('sketch initialized')
  }

  /**
   * 初始化 Sketch 实例
   */
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
```

```typescript [stylesheet.ts]
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
