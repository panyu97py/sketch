import { computed, defineComponent, PropType } from 'vue'
import { SketchText, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '@/common/hooks'

export const InternalSketchText = defineComponent({
  name: 'SketchText',
  props: {
    text: String,
    style: Object as PropType<StyleSheetDeclaration>
  },
  setup: (props, { slots }) => {
    const { text = '', style } = props

    const sketchText = computed(() => SketchText.create({ text, style }))

    useSketchElement({ self: sketchText.value })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    )
  }
})
