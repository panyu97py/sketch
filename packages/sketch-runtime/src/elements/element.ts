import { SketchNode } from './node'
import { StyleSheetCssProperties } from '../types'
import { StyleSheet } from './style-sheet'
import YogaLayout, { Node as YogaLayoutNode } from 'yoga-layout'

/**
 * 设计元素
 */
export abstract class SketchElement extends SketchNode {
  /**
     * 显示名称
     */
  public displayName: string

  /**
     * 布局节点
     */
  public readonly layout: YogaLayoutNode

  /**
     * 样式
     */
  public readonly style?: StyleSheetCssProperties

  /**
     * 构造函数
     * @param style 样式
     */
  constructor (style?: StyleSheetCssProperties) {
    super()
    this.style = style
    this.layout = YogaLayout.Node.create()
    StyleSheet.apply(this, this.style)
  }

  /**
     *元素初始化
     */
  public onMount () {}

  /**
     * 添加子元素
     * @param newChild 子元素
     */
  public appendChild (newChild: SketchElement) {
    super.appendChild(newChild)
    this.layout.insertChild(newChild.layout, this.layout.getChildCount())
    newChild.applyOnMount()
  }

  /**
     * 执行初始化逻辑
     */
  public applyOnMount () {
    if (!this._root) return
    this.onMount()
    this.childNodes.forEach(child => {
      (child as SketchElement).applyOnMount()
    })
  }

  /**
     * 计算元素相对位置
     */
  public calculateElementRelativePosition = () => {
    const top = this.layout.getComputedTop()
    const left = this.layout.getComputedLeft()
    const bottom = this.layout.getComputedBottom()
    const right = this.layout.getComputedRight()
    return { top, left, bottom, right }
  }

  /**
     * 计算元素绝对位置
     */
  public calculateElementAbsolutePosition = () => {
    const defaultPosition = { top: 0, left: 0, bottom: 0, right: 0 }
    const parentPosition = (this.parentNode as SketchElement)?.calculateElementAbsolutePosition() || defaultPosition
    const relativePosition = this.calculateElementRelativePosition()
    return {
      top: parentPosition.top + relativePosition.top,
      left: parentPosition.left + relativePosition.left,
      bottom: parentPosition.bottom + relativePosition.bottom,
      right: parentPosition.right + relativePosition.right
    }
  }

  /**
     * 获取元素大小
     */
  public getElementSize = () => {
    this._root?.calculateLayout()
    const width = this.layout.getComputedWidth()
    const height = this.layout.getComputedHeight()
    return { width, height }
  }
}
