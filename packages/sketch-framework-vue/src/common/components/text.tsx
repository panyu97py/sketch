import { defineComponent, defineProps } from 'vue'
import { SketchText } from '@sketchjs/runtime'
import { useAsyncComputed, useSketchElementRegister } from '../hooks'
import { SketchElementProps } from '../types'

export interface InternalSketchTextProps extends SketchElementProps {
  text?: string;
}

export const InternalSketchText = defineComponent({
  setup: () => {

    const props = defineProps<InternalSketchTextProps>()

    const { text = '', parent, style } = props

    const sketchText = useAsyncComputed(() => SketchText.create({ text, style }))

    useSketchElementRegister({ parent, target: sketchText })

    return () => <slot/>
  }
})
