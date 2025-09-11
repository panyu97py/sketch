import { render } from '@testing-library/vue'
import { Sketch, StyleSheet } from '@sketchjs/vue'

describe('Sketch.View', () => {
  test('Sketch.View.render', () => {
    const styleSheet = StyleSheet.create({
      view: { width: 100, height: 100 }
    })

    render(<Sketch.View style={styleSheet.view}/>)
  })
})
