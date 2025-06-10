import { mockDeep } from 'jest-mock-extended'
import { SketchElement, StyleSheet } from '@sketchjs/runtime'
import { CSS_TO_YOGA_MAP } from '@/constants'
import { Edge } from '@sketchjs/yoga-layout'

describe('StyleSheet', () => {
  describe('StyleSheet.create', () => {
    test('StyleSheet.create', () => {
      const styles = { element: { width: 100, height: 100 } }
      const styleSheet = StyleSheet.create(styles)
      expect(styleSheet).toEqual(styles)
    })
  })

  describe('StyleSheet.apply', () => {
    test('StyleSheet.apply.display', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const styleSheet = StyleSheet.create({ element: { display: 'none' } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setDisplay).toHaveBeenCalledWith('none')
    })

    test('StyleSheet.apply.width', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const styleSheet = StyleSheet.create({ element: { width: 100 } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setWidth).toHaveBeenCalledWith(100)
    })

    test('StyleSheet.apply.minWidth', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const styleSheet = StyleSheet.create({ element: { minWidth: 100 } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMinWidth).toHaveBeenCalledWith(100)
    })

    test('StyleSheet.apply.maxWidth', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const styleSheet = StyleSheet.create({ element: { maxWidth: 100 } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMaxWidth).toHaveBeenCalledWith(100)
    })

    test('StyleSheet.apply.height', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const styleSheet = StyleSheet.create({ element: { height: 100 } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setHeight).toHaveBeenCalledWith(100)
    })

    test('StyleSheet.apply.minHeight', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const styleSheet = StyleSheet.create({ element: { minHeight: 100 } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMinHeight).toHaveBeenCalledWith(100)
    })

    test('StyleSheet.apply.maxHeight', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const styleSheet = StyleSheet.create({ element: { maxHeight: 100 } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMaxHeight).toHaveBeenCalledWith(100)
    })

    test('StyleSheet.apply.boxSizing', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const boxSizing = 'border-box'
      const styleSheet = StyleSheet.create({ element: { boxSizing } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setBoxSizing).toHaveBeenCalledWith(CSS_TO_YOGA_MAP.boxSizing?.[boxSizing])
    })

    test('StyleSheet.apply.flex', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const flex = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { flex } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setFlex).toHaveBeenCalledWith(flex)
    })

    test('StyleSheet.apply.flexDirection', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const flexDirection = 'row'
      const styleSheet = StyleSheet.create({ element: { flexDirection } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setFlexDirection).toHaveBeenCalledWith(CSS_TO_YOGA_MAP.flexDirection?.[flexDirection])
    })

    test('StyleSheet.apply.flexWrap', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const flexWrap = 'wrap'
      const styleSheet = StyleSheet.create({ element: { flexWrap } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setFlexWrap).toHaveBeenCalledWith(CSS_TO_YOGA_MAP.flexWrap?.[flexWrap])
    })

    test('StyleSheet.apply.justifyContent', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const justifyContent = 'center'
      const styleSheet = StyleSheet.create({ element: { justifyContent } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setJustifyContent).toHaveBeenCalledWith(CSS_TO_YOGA_MAP.justifyContent?.[justifyContent])
    })

    test('StyleSheet.apply.alignItems', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const alignItems = 'center'
      const styleSheet = StyleSheet.create({ element: { alignItems } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setAlignItems).toHaveBeenCalledWith(CSS_TO_YOGA_MAP.alignItems?.[alignItems])
    })

    test('StyleSheet.apply.alignSelf', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const alignSelf = 'center'
      const styleSheet = StyleSheet.create({ element: { alignSelf } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setAlignSelf).toHaveBeenCalledWith(CSS_TO_YOGA_MAP.alignSelf?.[alignSelf])
    })

    test('StyleSheet.apply.position', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const position = 'absolute'
      const styleSheet = StyleSheet.create({ element: { position } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPositionType).toHaveBeenCalledWith(CSS_TO_YOGA_MAP.position?.[position])
    })

    test('StyleSheet.apply.top', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const top = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { top } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPosition).toHaveBeenCalledWith(Edge.Top, top)
    })

    test('StyleSheet.apply.right', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const right = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { right } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPosition).toHaveBeenCalledWith(Edge.Right, right)
    })

    test('StyleSheet.apply.bottom', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const bottom = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { bottom } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPosition).toHaveBeenCalledWith(Edge.Bottom, bottom)
    })

    test('StyleSheet.apply.left', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const left = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { left } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPosition).toHaveBeenCalledWith(Edge.Left, left)
    })

    test('StyleSheet.apply.margin', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const margin = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { margin } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMargin).toHaveBeenCalledWith(Edge.All, margin)
    })

    test('StyleSheet.apply.marginTop', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const marginTop = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { marginTop } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMargin).toHaveBeenCalledWith(Edge.Top, marginTop)
    })

    test('StyleSheet.apply.marginRight', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const marginRight = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { marginRight } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMargin).toHaveBeenCalledWith(Edge.Right, marginRight)
    })

    test('StyleSheet.apply.marginBottom', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const marginBottom = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { marginBottom } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMargin).toHaveBeenCalledWith(Edge.Bottom, marginBottom)
    })

    test('StyleSheet.apply.marginLeft', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const marginLeft = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { marginLeft } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setMargin).toHaveBeenCalledWith(Edge.Left, marginLeft)
    })

    test('StyleSheet.apply.padding', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const padding = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { padding } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPadding).toHaveBeenCalledWith(Edge.All, padding)
    })

    test('StyleSheet.apply.paddingTop', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const paddingTop = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { paddingTop } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPadding).toHaveBeenCalledWith(Edge.Top, paddingTop)
    })

    test('StyleSheet.apply.paddingRight', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const paddingRight = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { paddingRight } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPadding).toHaveBeenCalledWith(Edge.Right, paddingRight)
    })

    test('StyleSheet.apply.paddingBottom', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const paddingBottom = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { paddingBottom } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPadding).toHaveBeenCalledWith(Edge.Bottom, paddingBottom)
    })

    test('StyleSheet.apply.paddingLeft', () => {
      const sketchElementMock = mockDeep<SketchElement>()
      const paddingLeft = expect.any(Number)
      const styleSheet = StyleSheet.create({ element: { paddingLeft } })
      StyleSheet.apply(sketchElementMock, styleSheet.element)
      expect(sketchElementMock.layout?.setPadding).toHaveBeenCalledWith(Edge.Left, paddingLeft)
    })
  })
})
