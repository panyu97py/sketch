# sketch-runtime

sketch 运行时能力实现，用于在 Sketch 插件中使用。

### SketchRoot
```ts
import { SketchRoot, StyleSheet } from 'sketch-runtime'

(async ()=>{
    const style = StyleSheet.create({
        root: { width: 500, height: 500 }
    })
    const canvasNode = document.createElement('canvas')
    const canvasCtx = canvasNode.getContext('2d')
    const root = await SketchRoot.create({canvas: canvasNode, ctx: canvasCtx, style:style.root})
    document.body.appendChild(canvasNode)
    root.render()
})()

```

### SketchView
```ts
import { SketchRoot, SketchView, StyleSheet } from 'sketch-runtime'

(async ()=>{
  const style = StyleSheet.create({
    root: { width: 500, height: 500 },
    view: { width: 200, height: 200, backgroundColor: 'pink' }
  })
  const canvasNode = document.createElement('canvas')
  const canvasCtx = canvasNode.getContext('2d')
  const root = await SketchRoot.create({canvas: canvasNode, ctx: canvasCtx, style:style.root})
  const view = await SketchView.create(style.view)
  document.body.appendChild(canvasNode)
  root.appendChild(view)
  root.render()
})()
```

### SketchText
```ts
import { SketchRoot, SketchView, SketchText, StyleSheet } from 'sketch-runtime'
(async ()=>{
  const style = StyleSheet.create({
    root: { width: 500, height: 500 },
    view: { width: 200, height: 200, backgroundColor: 'pink' },
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
  const canvasNode = document.createElement('canvas')
  const canvasCtx = canvasNode.getContext('2d')
  const root = await SketchRoot.create({canvas: canvasNode, ctx: canvasCtx, style:style.root})
  const view = await SketchView.create({style:style.view})
  const text = await SketchText.create({text:'Hello World', style:style.text})
  document.body.appendChild(canvasNode)
  root.appendChild(view)   
  view.appendChild(text)
  root.render()
})()
```

### SketchImage
```ts
import { SketchRoot, SketchView, SketchImage, StyleSheet } from 'sketch-runtime'
import logo from './logo.png';
(async ()=>{
  const style = StyleSheet.create({
    root: { width: 500, height: 500 },
    view: { width: 200, height: 200, backgroundColor: 'pink' },
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
  const canvasNode = document.createElement('canvas')
  const canvasCtx = canvasNode.getContext('2d')
  const root = await SketchRoot.create({canvas: canvasNode, ctx: canvasCtx, style:style.root})
  const view = await SketchView.create({style:style.view})
  const image = await SketchImage.create({src:logo, style:style.text})
  document.body.appendChild(canvasNode)
  root.appendChild(view)
  view.appendChild(image)
  root.render()
})()
```
