import { computed, defineComponent, inject, PropType, provide } from 'vue'
import { SketchElement, SketchView, StyleSheetCssProperties } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../hooks'

export const SketchViewProps = {
  style: Object as PropType<StyleSheetCssProperties>,
}

export const InternalSketchView = defineComponent({
  name: 'SketchView',
  props: SketchViewProps,
  setup: (props, { slots }) => {

    const parent = inject<SketchElement>('parent');

    const sketchView = computed(() => SketchView.create({ style: props.style }))

    useSketchElementRegister({ parent, target: sketchView.value })

    provide<SketchElement>('parent', sketchView.value)

    return () => (
      <template>
        {slots.default ? slots.default({ parent: sketchView.value }) : null}
      </template>
    )
  }
})
