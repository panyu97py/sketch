import { render } from '@testing-library/vue'
import { Sketch, StyleSheet } from '@sketchjs/vue'

describe('Sketch.Image (web)', () => {
  test('render', () => {
    const styleSheet = StyleSheet.create({
      image: { width: 100, height: 100 }
    })
    render(<Sketch.Image style={styleSheet.image} src=""/>)
  })
})
