import { render, waitFor } from '@testing-library/vue'
import { Sketch, StyleSheet, StyleSheetDeclaration } from '@sketchjs/vue'
import { defineComponent, PropType, onMounted } from 'vue'

describe('Sketch.Root', () => {
  test('Sketch.Root.render', async () => {
    const styleSheet = StyleSheet.create({
      root: {
        width: 100,
        height: 100
      }
    })

    const SketchTestComponentProps = {
      style: Object as PropType<StyleSheetDeclaration>
    }

    const SketchTestComponentEmits = {
      ready: (dataUrl?: string) => !dataUrl || true
    }

    const SketchTestComponent = defineComponent({
      name: 'SketchTestComponent',
      props: SketchTestComponentProps,
      emits: SketchTestComponentEmits,
      setup: (props, { emit }) => {
        const sketch = Sketch.useSketch()

        const handleOnReady = () => {
          const dataUrl = sketch.value.toDataURL('image/png', 1)
          emit('ready', dataUrl)
        }
        onMounted(() => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')!
          sketch.value.init({ canvas, ctx })
        })
        return () => <Sketch.Root sketch={sketch.value} style={props.style} onReady={handleOnReady}/>
      }
    })

    const onReady = jest.fn()

    render(<SketchTestComponent onReady={onReady} style={styleSheet.root}/>)

    await waitFor(() => expect(onReady).toHaveBeenCalledWith(expect.any(String)))
  })
})
