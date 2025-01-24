import { defineComponent, defineProps } from 'vue'
import { useAsyncComputed, useSketchElementRegister } from '../../common/hooks'
import { SketchElementProps } from '../../common/types'
import { SketchAppletImage } from '../elements'

export interface InternalSketchTextProps extends SketchElementProps {
  src?: string;
}

export const InternalSketchAppletImage = defineComponent({
  setup: () => {
    const props = defineProps<InternalSketchTextProps>()

    const { src = '', parent, style } = props

    const sketchAppletImage = useAsyncComputed(() => SketchAppletImage.create({ src, style }))

    useSketchElementRegister({ parent, target: sketchAppletImage })
  }
})
