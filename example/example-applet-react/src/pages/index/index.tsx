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
