import { SketchRoot, SketchText, SketchView, StyleSheet, debugOption, SketchImage } from '@sketchjs/runtime'
import logo from './assets/logo.png'
import './styles.less'

(async () => {
  debugOption.debug = true

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
