import { mockDeep } from 'jest-mock-extended'
import { useSketchElement, Opt } from '@/common/hooks'
import { SketchElement } from '@sketchjs/runtime'
import { render, waitFor } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

describe('useSketchElement', () => {

  test('useSketchElement.onRegister', async () => {

    const self = mockDeep<SketchElement>()
    const onRegister = jest.fn()
    const onUnregister = jest.fn()

    type TestComponentProps = Opt

    const TestComponent: React.FC<TestComponentProps> = (props) => {
      const { childrenVNodes } = useSketchElement(props)
      return <>{childrenVNodes}</>
    }

    render(<TestComponent self={self} onRegister={onRegister} onUnregister={onUnregister}/>)
    expect(onRegister).toHaveBeenCalledWith(self)
  })

  test('useSketchElement.onUnregister', async () => {

    const self = mockDeep<SketchElement>()
    const onUnregister = jest.fn()

    type TestComponentProps = Opt

    const TestComponent: React.FC<TestComponentProps> = (props) => {
      const { childrenVNodes } = useSketchElement(props)
      return <>{childrenVNodes}</>
    }

    const { unmount } = render(<TestComponent self={self} onUnregister={onUnregister}/>)
    unmount()
    expect(onUnregister).toHaveBeenCalledWith(self)
  })

  test('useSketchElement.SketchElement', async () => {
    const parent = mockDeep<SketchElement>()
    const firstChild = mockDeep<SketchElement>()
    const secondChild = mockDeep<SketchElement>()

    type TestElementComponentProps = Opt

    const TestElementComponent: React.FC<TestElementComponentProps> = (props) => {
      const { childrenVNodes } = useSketchElement(props)
      return <>{childrenVNodes}</>
    }

    const TestComponent: React.FC = () => {
      const [isFirstElementVisible, setFirstElementVisible] = useState<boolean>(false)

      useEffect(()=>{
        setTimeout(()=>setFirstElementVisible(true),0)
      },[])

      return (
        <TestElementComponent self={parent}>
          {isFirstElementVisible && <TestElementComponent self={firstChild}/>}
          <TestElementComponent self={secondChild}/>
        </TestElementComponent>
      )
    }

    const { unmount } = render(<TestComponent/>)
    expect(parent.insertBefore).toHaveBeenCalledWith(secondChild, undefined)
    await waitFor(()=> expect(parent.insertBefore).toHaveBeenCalledWith(firstChild, secondChild))

    unmount()
    expect(parent.removeChild).toHaveBeenCalledWith(secondChild)
    await waitFor(()=> expect(parent.removeChild).toHaveBeenCalledWith(firstChild))
  })
})
