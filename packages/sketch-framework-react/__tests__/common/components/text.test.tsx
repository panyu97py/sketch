import { Sketch, StyleSheet } from '@sketchjs/react'
import { render } from '@testing-library/react'
import React from 'react'

describe('Sketch.Text', () => {
  test('Sketch.Text.render', () => {
    const styleSheet = StyleSheet.create({
      text: {
        fontSize: 16,
        color: '#000'
      }
    })

    const SketchTestComponent: React.FC = () => {
      return <Sketch.Text style={styleSheet.text}/>
    }

    render(<SketchTestComponent/>)
  })
})
