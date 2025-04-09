import { computed, defineComponent, inject, PropType, provide } from 'vue'
import { useSketchElementRegister } from '../../common/hooks'
import { SketchAppletImage } from '../elements'
import { SketchElement, StyleSheetCssProperties } from '@sketchjs/runtime'

export const SketchImageProps = {
  src: String,
  style: Object as PropType<StyleSheetCssProperties>,
};

export const InternalSketchAppletImage = defineComponent({
  name: 'SketchAppletImage',
  props: SketchImageProps,
  setup: (props,{ slots }) => {

    const parent = inject<SketchElement>('parent');

    const sketchAppletImage = computed(() => SketchAppletImage.create({ src: props.src || '', style: props.style }))

    useSketchElementRegister({ parent, target: sketchAppletImage.value })

    provide<SketchElement>('parent', sketchAppletImage.value)

    return () => (
      <template>
        {slots.default ? slots.default({ parent: sketchAppletImage.value }) : null}
      </template>
    )
  }
})
