import { Node as YogaLayoutNode } from '@sketchjs/yoga-layout'
import { SketchNode } from './node'
import { StyleSheetCssProperties } from '../types'
import { StyleSheet } from './style-sheet'
import { YogaLayoutUtils } from '../utils'

export interface CreateSketchElementOpt{
    style?: StyleSheetCssProperties
}

/**
 * 设计元素
 */
export class SketchElement extends SketchNode {
  /**
   * 显示名称
   */
  public displayName: string

  /**
   * 是否准备就绪
   */
  public isMounted = false

  /**
   * 布局节点
   */
  public layout: YogaLayoutNode

  /**
   * 样式
   */
  public style?: StyleSheetCssProperties

  /**
   * 静态工厂方法，返回异步初始化后的实例
   */
  public static async create (opt: CreateSketchElementOpt) {
    const element = new SketchElement()
    await element.init(opt)
    return element
  }

  public async init (opt: CreateSketchElementOpt) {
    const { style } = opt
    await this.initializeLayout()
    this.setStyle(style)
  }

  /**
   * 异步加载和初始化布局
   */
  public async initializeLayout () {
    const yoga = await YogaLayoutUtils.load()
    this.layout = yoga.Node.create()
  }

  /**
   * 设置样式
   * @param style
   */
  public setStyle (style?: StyleSheetCssProperties) {
    this.style = style
    StyleSheet.apply(this, this.style)
  }

  /**
   *元素初始化
   */
  public async onMount () {
    this.isMounted = true
  }

  /**
   * 添加子元素
   * @param newChild 子元素
   */
  public async appendChild (newChild: SketchElement) {
    super.appendChild(newChild)
    this.layout.insertChild(newChild.layout, this.layout.getChildCount())
    await newChild.applyOnMount()
  }

  /**
   * 移除子元素
   * @param child 子元素
   */
  public removeChild (child: SketchElement) {
    super.removeChild(child)
    this.layout.removeChild(child.layout)
  }

  /**
   * 执行初始化逻辑
   */
  public async applyOnMount () {
    if (!this._root?.isMounted) return
    await this.onMount()
    return Promise.all(this.childNodes.map(child => {
      return (child as SketchElement).applyOnMount()
    }))
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

  render () {
    return Promise.resolve()
  }
}
