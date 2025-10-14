import { computed, defineComponent, PropType } from 'vue'
import { SketchView, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '@/common/hooks'

export const InternalSketchView = defineComponent({
  name: 'SketchView',
  props: {
    style: Object as PropType<StyleSheetDeclaration>
  },
  setup: (props, { slots }) => {
    const sketchView = computed(() => SketchView.create({ style: props.style }))

    useSketchElement({ self: sketchView.value })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    )
  }
})
