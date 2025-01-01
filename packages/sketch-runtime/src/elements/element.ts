import { SketchNode } from './node'
import { StyleSheetCssProperties } from '../types'
import { StyleSheet } from './style-sheet'
import YogaLayout, { Node as YogaLayoutNode } from 'yoga-layout'

export abstract class SketchElement extends SketchNode {
  public displayName: string

  public readonly layout: YogaLayoutNode

  public readonly style?: StyleSheetCssProperties

  constructor (style?: StyleSheetCssProperties) {
    super()
    this.style = style
    this.layout = YogaLayout.Node.create()
    StyleSheet.apply(this, this.style)
  }

  public appendChild (newChild: SketchElement) {
    super.appendChild(newChild)
    this.layout.insertChild(newChild.layout, this.layout.getChildCount())
  }
}
