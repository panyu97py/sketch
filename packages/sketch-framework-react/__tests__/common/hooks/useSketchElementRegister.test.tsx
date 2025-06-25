import { mockDeep } from 'jest-mock-extended'
import { useSketchElementRegister } from '@/common/hooks'
import { SketchElement } from '@sketchjs/runtime'
import React, { useEffect, useState } from 'react'
import { render, waitFor} from '@testing-library/react'

describe('useSketchElementRegister', () => {

  test('useSketchElementRegister', async () => {

    interface SketchTestComponentProps {
      parent?: SketchElement
      curTarget?: SketchElement
      nextTarget?: SketchElement
    }

    const parent = mockDeep<SketchElement>({})
    const curTarget = mockDeep<SketchElement>({})
    const nextTarget = mockDeep<SketchElement>({})

    const SketchTestComponent: React.FC<SketchTestComponentProps> = (props) => {
      const {
        parent,
        curTarget,
        nextTarget
      } = props
      const [isSwitchTarget, setIsSwitchTarget] = useState(false)
      const target = isSwitchTarget ? nextTarget : curTarget

      useSketchElementRegister({ parent, target })

      useEffect(() => {
        setTimeout(() => setIsSwitchTarget(true), 500)
      }, [])

      return null
    }

    render(<SketchTestComponent parent={parent} curTarget={curTarget} nextTarget={nextTarget}/>)
    expect(parent?.appendChild).toHaveBeenCalledWith(curTarget)
    await waitFor(() => expect(parent?.appendChild).toHaveBeenCalledWith(nextTarget))
    await waitFor(() => expect(parent?.removeChild).toHaveBeenCalledWith(curTarget))
  })
})
