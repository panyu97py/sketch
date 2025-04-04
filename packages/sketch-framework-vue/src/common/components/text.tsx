import { computed, defineComponent, PropType } from 'vue'
import { SketchElement, SketchText, StyleSheetCssProperties } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../hooks'

export const SketchTextProps = {
  text: String,
  parent: Object as PropType<SketchElement>,
  style: Object as PropType<StyleSheetCssProperties>,
};

export const InternalSketchText = defineComponent({
  name: 'SketchText',
  props: SketchTextProps,
  setup: (props) => {

    const { text = '', parent, style } = props

    const sketchText = computed(() => SketchText.create({ text, style }))

    useSketchElementRegister({ parent, target: sketchText.value })

    return () => <slot/>
  }
})
