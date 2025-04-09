import { View, Canvas } from '@tarojs/components'
import { StyleSheet, Sketch } from '@sketchjs/react'
import logo from '@/assets/logo.png'
import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.less'

Sketch.debug = true

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

  const handleSketchUpdate = () => {
    console.log('sketch update')
  }

  const handleSketchInitialized = () => {
    console.log('sketch initialized')
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
      <Sketch.Root sketch={sketch} style={style.root} onReady={handleSketchInitialized} onUpdate={handleSketchUpdate}>
        <Sketch.View style={style.rootView}>
          <Sketch.Image src={logo} style={style.logo} />
          <Sketch.Text text='Hello  World!' style={style.text} />
        </Sketch.View>
      </Sketch.Root>
    </View>
  )
}
export default Index
