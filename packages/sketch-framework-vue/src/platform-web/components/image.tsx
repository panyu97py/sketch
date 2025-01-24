import { defineComponent, defineProps } from 'vue'
import { SketchImage } from '@sketchjs/runtime'
import { useAsyncComputed, useSketchElementRegister } from '../../common/hooks'
import { SketchElementProps } from '../../common/types'

export interface InternalSketchTextProps extends SketchElementProps {
  src?: string;
}

export const InternalSketchWebImage = defineComponent({
  setup: () => {
    const props = defineProps<InternalSketchTextProps>()

    const { src = '', parent, style } = props

    const sketchText = useAsyncComputed(() => SketchImage.create({ src, style }))

    useSketchElementRegister({ parent, target: sketchText })
  }
})
