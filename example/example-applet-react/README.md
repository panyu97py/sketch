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
> 由于`yoga-layout`使用了`WebAssembly`，所以在小程序中无法正确引入。
