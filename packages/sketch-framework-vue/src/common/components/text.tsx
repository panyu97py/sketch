import { computed, defineComponent, inject, PropType } from 'vue'
import { SketchElement, SketchText, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../hooks'

export const SketchTextProps = {
  text: String,
  style: Object as PropType<StyleSheetDeclaration>,
};

export const InternalSketchText = defineComponent({
  name: 'SketchText',
  props: SketchTextProps,
  setup: (props, { slots }) => {

    const { text = '', style } = props

    const parent = inject<SketchElement>('parent');

    const sketchText = computed(() => SketchText.create({ text, style }))

    useSketchElementRegister({ parent, target: sketchText.value })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    );
  }
})
