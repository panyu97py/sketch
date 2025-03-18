import { computed, defineComponent, defineProps } from 'vue'
import { SketchImage } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../../common/hooks'
import { SketchElementProps } from '../../common/types'

export interface InternalSketchWebImageProps extends SketchElementProps {
  src?: string;
}

export const InternalSketchWebImage = defineComponent({
  name: 'SketchWebImage',
  setup: () => {
    const props = defineProps<InternalSketchWebImageProps>()

    const { src = '', parent, style } = props

    const sketchWebImage = computed(() => SketchImage.create({ src, style }))

    useSketchElementRegister({ parent, target: sketchWebImage })
  }
})
