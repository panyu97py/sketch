import { SketchNode } from './node'
import { StyleSheetCssProperties } from '../types'
import { StyleSheet } from './style-sheet'

export class SketchElement extends SketchNode {
  constructor (style?: StyleSheetCssProperties) {
    super()
    StyleSheet.apply(this, style)
  }

  public render (): void {}
}
