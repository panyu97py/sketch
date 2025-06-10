import { Edge } from '@sketchjs/yoga-layout'
import { CSS_TO_YOGA_MAP } from '@/constants'
import { StyleSheetDeclaration, StyleSheetCssProperty } from '@/types'
import { isEmpty } from '@/utils'
import { SketchElement } from '../element'
import { borderRadiusTransform, StyleTransformStrategy } from './transform'

/**
 * 样式工具类
 */
export class StyleSheet {
  /**
   * 样式转换策略
   */
  private static styleTransformers: StyleTransformStrategy[] = [borderRadiusTransform]

  /**
   * 创建样式
   * @param styles
   */
  static create<T extends Record<string, StyleSheetDeclaration>> (styles: T) {
    return styles
  }

  /**
   * 格式化样式
   * @param style
   */
  static transform<T extends StyleSheetDeclaration> (style: T) {
    return Object.keys(style).reduce<StyleSheetDeclaration>((result, cssProperty:StyleSheetCssProperty) => {
      const { [cssProperty]: cssValue } = style
      if (isEmpty(cssValue)) return result
      const strategy = this.styleTransformers.find(s => s.match.includes(cssProperty))
      if (!strategy) return { ...result, [cssProperty]: cssValue }
      return strategy.apply({ cssProperty, cssValue, source: style, result })
    }, {})
  }

  /**
   * 应用样式
   * @param sketchElement
   * @param style
   */
  static apply (sketchElement: SketchElement, style?: StyleSheetDeclaration) {
    if (!style) return
    Object.keys(style).forEach((cssProperty: StyleSheetCssProperty) => {
      const { [cssProperty]: cssValue } = style
      if (isEmpty(cssValue) || !sketchElement.layout) return
      const finalValue = (() => {
        if (!Object.keys(CSS_TO_YOGA_MAP).includes(cssProperty)) return cssValue
        const { [cssValue as string]: EdgeValue } = CSS_TO_YOGA_MAP[cssProperty] || {}
        return !isEmpty(EdgeValue) ? EdgeValue : cssValue
      })()
      switch (cssProperty) {
        case 'display':
          return sketchElement.layout.setDisplay(finalValue)
        case 'width':
          return sketchElement.layout.setWidth(finalValue)
        case 'minWidth':
          return sketchElement.layout.setMinWidth(finalValue)
        case 'maxWidth':
          return sketchElement.layout.setMaxWidth(finalValue)
        case 'height':
          return sketchElement.layout.setHeight(finalValue)
        case 'minHeight':
          return sketchElement.layout.setMinHeight(finalValue)
        case 'maxHeight':
          return sketchElement.layout.setMaxHeight(finalValue)
        case 'boxSizing':
          return sketchElement.layout.setBoxSizing(finalValue)
        case 'flex':
          return sketchElement.layout.setFlex(finalValue)
        case 'flexWrap':
          return sketchElement.layout.setFlexWrap(finalValue)
        case 'flexDirection':
          return sketchElement.layout.setFlexDirection(finalValue)
        case 'justifyContent':
          return sketchElement.layout.setJustifyContent(finalValue)
        case 'alignItems':
          return sketchElement.layout.setAlignItems(finalValue)
        case 'alignSelf':
          return sketchElement.layout.setAlignSelf(finalValue)
        case 'position':
          return sketchElement.layout.setPositionType(finalValue)
        case 'top':
          return sketchElement.layout.setPosition(Edge.Top, finalValue)
        case 'right':
          return sketchElement.layout.setPosition(Edge.Right, finalValue)
        case 'bottom':
          return sketchElement.layout.setPosition(Edge.Bottom, finalValue)
        case 'left':
          return sketchElement.layout.setPosition(Edge.Left, finalValue)
        case 'margin':
          return sketchElement.layout.setMargin(Edge.All, finalValue)
        case 'marginTop':
          return sketchElement.layout.setMargin(Edge.Top, finalValue)
        case 'marginRight':
          return sketchElement.layout.setMargin(Edge.Right, finalValue)
        case 'marginBottom':
          return sketchElement.layout.setMargin(Edge.Bottom, finalValue)
        case 'marginLeft':
          return sketchElement.layout.setMargin(Edge.Left, finalValue)
        case 'padding':
          return sketchElement.layout.setPadding(Edge.All, finalValue)
        case 'paddingTop':
          return sketchElement.layout.setPadding(Edge.Top, finalValue)
        case 'paddingRight':
          return sketchElement.layout.setPadding(Edge.Right, finalValue)
        case 'paddingBottom':
          return sketchElement.layout.setPadding(Edge.Bottom, finalValue)
        case 'paddingLeft':
          return sketchElement.layout.setPadding(Edge.Left, finalValue)
        default:
          break
      }
    })
  }
}
