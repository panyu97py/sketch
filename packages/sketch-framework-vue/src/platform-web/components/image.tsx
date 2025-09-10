import { computed, defineComponent, PropType } from 'vue'
import { SketchImage, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '../../common/hooks'

export const SketchImageProps = {
  src: String,
  style: Object as PropType<StyleSheetDeclaration>
}

export const InternalSketchWebImage = defineComponent({
  name: 'SketchWebImage',
  props: SketchImageProps,
  setup: (props, { slots }) => {
    const sketchWebImage = computed(() => SketchImage.create({ src: props.src || '', style: props.style }))

    useSketchElement({ self: sketchWebImage.value })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    )
  }
})
