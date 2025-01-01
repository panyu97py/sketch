import YogaLayout from 'yoga-layout'
import { StyleSheetCssProperties } from '../types'
import { CSS_TO_YOGA_MAP } from '../constants'
import { isEmpty } from '../utils'
import { SketchElement } from './element'

/**
 * 样式工具类
 */
export class StyleSheet {
  /**
     * 创建样式
     * @param styles
     */
  static create<T extends Record<string, StyleSheetCssProperties>> (styles: T) {
    return styles
  }

  /**
     * 应用样式
     * @param sketchElement
     * @param style
     */
  static apply (sketchElement: SketchElement, style?: StyleSheetCssProperties) {
    if (!style) return
    Object.keys(style).forEach((cssProperty: keyof StyleSheetCssProperties) => {
      const { [cssProperty]: cssValue } = style
      if (isEmpty(cssValue)) return
      const { [cssValue!]: yogaLayoutValue } = CSS_TO_YOGA_MAP[cssProperty] || {}
      const finalValue = yogaLayoutValue || cssValue
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
          return sketchElement.layout.setPosition(YogaLayout.EDGE_TOP, finalValue)
        case 'right':
          return sketchElement.layout.setPosition(YogaLayout.EDGE_RIGHT, finalValue)
        case 'bottom':
          return sketchElement.layout.setPosition(YogaLayout.EDGE_BOTTOM, finalValue)
        case 'left':
          return sketchElement.layout.setPosition(YogaLayout.EDGE_LEFT, finalValue)
        case 'margin':
          return sketchElement.layout.setMargin(YogaLayout.EDGE_ALL, finalValue)
        case 'marginTop':
          return sketchElement.layout.setMargin(YogaLayout.EDGE_TOP, finalValue)
        case 'marginRight':
          return sketchElement.layout.setMargin(YogaLayout.EDGE_RIGHT, finalValue)
        case 'marginBottom':
          return sketchElement.layout.setMargin(YogaLayout.EDGE_BOTTOM, finalValue)
        case 'marginLeft':
          return sketchElement.layout.setMargin(YogaLayout.EDGE_LEFT, finalValue)
        case 'padding':
          return sketchElement.layout.setPadding(YogaLayout.EDGE_ALL, finalValue)
        case 'paddingTop':
          return sketchElement.layout.setPadding(YogaLayout.EDGE_TOP, finalValue)
        case 'paddingRight':
          return sketchElement.layout.setPadding(YogaLayout.EDGE_RIGHT, finalValue)
        case 'paddingBottom':
          return sketchElement.layout.setPadding(YogaLayout.EDGE_BOTTOM, finalValue)
        case 'paddingLeft':
          return sketchElement.layout.setPadding(YogaLayout.EDGE_LEFT, finalValue)
        default:
          break
      }
    })
  }
}
