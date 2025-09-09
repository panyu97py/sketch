import { computed, defineComponent, PropType } from 'vue'
import { SketchView, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '../hooks'

export const SketchViewProps = {
  style: Object as PropType<StyleSheetDeclaration>,
}

export const InternalSketchView = defineComponent({
  name: 'SketchView',
  props: SketchViewProps,
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
