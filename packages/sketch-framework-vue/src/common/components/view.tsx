import { computed, defineComponent, defineProps } from 'vue'
import { SketchView } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../hooks'
import { SketchElementProps } from '../types'

export type InternalSketchViewProps = SketchElementProps

export const InternalSketchView = defineComponent({
  name: 'SketchView',
  setup: () => {
    const props = defineProps<InternalSketchViewProps>()

    const { parent, style } = props

    const sketchView = computed(() => SketchView.create({ style }))

    useSketchElementRegister({ parent, target: sketchView })

    return () => <slot parent={sketchView} />
  }
})
