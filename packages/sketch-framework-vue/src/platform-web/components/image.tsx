import { computed, defineComponent, inject, PropType, provide } from 'vue'
import { SketchElement, SketchImage, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../../common/hooks'

export const SketchImageProps = {
  src: String,
  style: Object as PropType<StyleSheetDeclaration>,
};

export const InternalSketchWebImage = defineComponent({
  name: 'SketchWebImage',
  props: SketchImageProps,
  setup: (props,{ slots }) => {

    const parent = inject<SketchElement>('parent');

    const sketchWebImage = computed(() => SketchImage.create({ src: props.src || '', style: props.style }))

    useSketchElementRegister({ parent, target: sketchWebImage.value })

    provide<SketchElement>('parent', sketchWebImage.value)

    return () => (
      <template>
        {slots.default?.() || null}
      </template>
    )
  }
})
