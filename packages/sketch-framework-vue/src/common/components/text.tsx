import { computed, defineComponent, PropType } from 'vue'
import { SketchText, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '@/common/hooks'

export const InternalSketchText = defineComponent({
  name: 'SketchText',
  props: {
    /**
     * 文本内容
     */
    text: String,
    /**
     * 样式
     */
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
