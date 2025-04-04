import { computed, defineComponent, PropType } from 'vue'
import { SketchElement, SketchView, StyleSheetCssProperties } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../hooks'

export const SketchViewProps = {
  parent: Object as PropType<SketchElement>,
  style: Object as PropType<StyleSheetCssProperties>,
}

export const InternalSketchView = defineComponent({
  name: 'SketchView',
  props: SketchViewProps,
  setup: (props, { slots }) => {

    const sketchView = computed(() => SketchView.create({ style: props.style }))

    useSketchElementRegister({ parent: props.parent, target: sketchView.value })

    return () => (
      <template>
        {slots.default ? slots.default({ parent: sketchView.value }) : null}
      </template>
    )
  }
})
