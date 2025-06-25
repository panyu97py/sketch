import { Sketch, StyleSheet } from '@sketchjs/react'
import { render } from '@testing-library/react'
import React from 'react'

describe('Sketch.Image', () => {
  test('Sketch.Image.render', () => {
    const styleSheet = StyleSheet.create({
      image: {
        width: 100,
        height: 100
      }
    })

    const SketchTestComponent: React.FC = () => {
      return <Sketch.Image style={styleSheet.image} src={expect.any(String)}/>
    }

    render(<SketchTestComponent/>)
  })
})
