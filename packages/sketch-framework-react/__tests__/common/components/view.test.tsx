import { Sketch, StyleSheet } from '@sketchjs/react'
import { render } from '@testing-library/react'
import React from 'react'

describe('Sketch.Text', () => {
  test('Sketch.Text.render', () => {
    const styleSheet = StyleSheet.create({
      view: {
        width: 100,
        height: 100
      }
    })

    const SketchTestComponent: React.FC = () => {
      return <Sketch.View style={styleSheet.view}/>
    }

    render(<SketchTestComponent/>)
  })
})
