import { computed, defineComponent, PropType } from 'vue'
import { SketchElement, SketchImage, StyleSheetCssProperties } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../../common/hooks'

export const SketchImageProps = {
  src: String,
  parent: Object as PropType<SketchElement>,
  style: Object as PropType<StyleSheetCssProperties>,
};

export const InternalSketchWebImage = defineComponent({
  name: 'SketchWebImage',
  props: SketchImageProps,
  setup: (props,{ slots }) => {

    const { src = '', parent, style } = props

    const sketchWebImage = computed(() => SketchImage.create({ src, style }))

    useSketchElementRegister({ parent, target: sketchWebImage.value })

    return () => (
      <template>
        {slots.default ? slots.default({ parent: sketchWebImage.value }) : null}
      </template>
    )
  }
})
