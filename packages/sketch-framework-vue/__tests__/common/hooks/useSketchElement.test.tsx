import { render, waitFor } from '@testing-library/vue'
import { defineComponent, h, onMounted, ref, PropType } from 'vue'
import { useSketchElement } from '@/common/hooks'
import type { SketchElement } from '@sketchjs/runtime'
import { mockDeep } from 'jest-mock-extended'

const createElementMock = () => mockDeep<SketchElement>()

describe('useSketchElement (vue)', () => {
  test('onRegister/onUnregister 顺序与 nextSibling', async () => {
    const parent = createElementMock()
    const firstChild = createElementMock()
    const secondChild = createElementMock()

    const SketchTestComponentProps = {
      self: Object as PropType<SketchElement>
    }

    const SketchTestComponent = defineComponent({
      name: 'TestElement',
      props: SketchTestComponentProps,
      setup: (props, { slots }) => {
        useSketchElement({ self: props.self as SketchElement })
        return () => h('template', slots.default?.())
      }
    })

    const TestHost = defineComponent(() => {
      const showFirst = ref(false)
      onMounted(() => {
        setTimeout(() => (showFirst.value = true))
      })
      return () => (
        <SketchTestComponent self={parent}>
          {showFirst.value && <SketchTestComponent key="first" self={firstChild} />}
          <SketchTestComponent key="second" self={secondChild} />
        </SketchTestComponent>
      )
    })

    const { unmount } = render(TestHost)

    await waitFor(() => expect((parent.insertBefore)).toHaveBeenCalledWith(secondChild, undefined))
    await waitFor(() => expect((parent.insertBefore)).toHaveBeenCalledWith(firstChild, secondChild))

    unmount()
    await waitFor(() => expect((parent.removeChild)).toHaveBeenCalledWith(secondChild))
    await waitFor(() => expect((parent.removeChild)).toHaveBeenCalledWith(firstChild))
  })
})
