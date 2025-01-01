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

  public onMount () {}

  public appendChild (newChild: SketchElement) {
    super.appendChild(newChild)
    this.layout.insertChild(newChild.layout, this.layout.getChildCount())
    newChild.applyOnMount()
  }

  public applyOnMount () {
    if (!this._root) return
    this.onMount()
    this.childNodes.forEach(child => {
      (child as SketchElement).applyOnMount()
    })
  }

  public calculateElementRelativePosition = () => {
    const top = this.layout.getComputedTop()
    const left = this.layout.getComputedLeft()
    const bottom = this.layout.getComputedBottom()
    const right = this.layout.getComputedRight()
    return { top, left, bottom, right }
  }

  public getElementAbsolutePosition = () => {
    const defaultPosition = { top: 0, left: 0, bottom: 0, right: 0 }
    const parentPosition = (this.parentNode as SketchElement)?.getElementAbsolutePosition() || defaultPosition
    const relativePosition = this.calculateElementRelativePosition()
    return {
      top: parentPosition.top + relativePosition.top,
      left: parentPosition.left + relativePosition.left,
      bottom: parentPosition.bottom + relativePosition.bottom,
      right: parentPosition.right + relativePosition.right
    }
  }

  public getElementSize = () => {
    this._root?.calculateLayout()
    const width = this.layout.getComputedWidth()
    const height = this.layout.getComputedHeight()
    return { width, height }
  }
}
