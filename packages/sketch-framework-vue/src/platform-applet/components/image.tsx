import { computed, defineComponent, PropType } from 'vue'
import { useSketchElement } from '../../common/hooks'
import { SketchAppletImage } from '../elements'
import { StyleSheetDeclaration } from '@sketchjs/runtime'

export const SketchImageProps = {
  src: String,
  style: Object as PropType<StyleSheetDeclaration>,
};

export const InternalSketchAppletImage = defineComponent({
  name: 'SketchAppletImage',
  props: SketchImageProps,
  setup: (props,{ slots }) => {

    const sketchAppletImage = computed(() => SketchAppletImage.create({ src: props.src || '', style: props.style }))

    useSketchElement({ self: sketchAppletImage.value })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    )
  }
})
