import { render } from '@testing-library/vue'
import { Sketch, StyleSheet } from '@sketchjs/vue'

describe('Sketch.Text', () => {
  test('Sketch.Text.render', () => {
    const styleSheet = StyleSheet.create({
      text: { fontSize: 16, color: '#000' }
    })

    render(<Sketch.Text style={styleSheet.text}/>)
  })
})
