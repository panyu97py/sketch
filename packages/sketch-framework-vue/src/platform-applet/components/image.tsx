import { computed, defineComponent, PropType } from 'vue'
import { useSketchElementRegister } from '../../common/hooks'
import { SketchAppletImage } from '../elements'
import { SketchElement, StyleSheetCssProperties } from '@sketchjs/runtime'

export const SketchImageProps = {
  src: String,
  parent: Object as PropType<SketchElement>,
  style: Object as PropType<StyleSheetCssProperties>,
};

export const InternalSketchAppletImage = defineComponent({
  name: 'SketchAppletImage',
  props: SketchImageProps,
  setup: (props,{ slots }) => {

    const { src = '', parent, style } = props

    const sketchAppletImage = computed(() => SketchAppletImage.create({ src, style }))

    useSketchElementRegister({ parent, target: sketchAppletImage.value })

    return () => (
      <template>
        {slots.default ? slots.default({ parent: sketchAppletImage.value }) : null}
      </template>
    )
  }
})
