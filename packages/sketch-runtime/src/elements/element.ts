import { Node as YogaLayoutNode } from '@sketchjs/yoga-layout'
import { StyleSheetCssProperties } from '../types'
import { StyleSheet } from './style-sheet'
import { log, YogaLayoutUtils } from '../utils'
import { SketchRoot } from './root'

const defaultPosition = { top: 0, left: 0, bottom: 0, right: 0 }

export interface CreateSketchElementOpt {
  style?: StyleSheetCssProperties
}

/**
 * 设计元素
 */
export class SketchElement {
  /**
   * 显示名称
   */
  public displayName: string

  /**
   * 是否准备就绪
   */
  public isMounted = false

  /**
   * 父节点
   */
  public parentNode: SketchElement | null = null

  /**
   * 子节点
   */
  public childNodes: SketchElement[] = []

  /**
   * 布局节点
   */
  public layout?: YogaLayoutNode

  /**
   * 样式
   */
  public style?: StyleSheetCssProperties

  /**
   * 是否为根节点
   */
  public get isRoot () {
    return this === this._root as SketchElement
  }

  /**
   * 获取根节点
   */
  public get _root (): SketchRoot | null {
    return this.parentNode?._root || null
  }

  /**
   * 构造函数
   * @param style 样式
   */
  protected constructor (style?: StyleSheetCssProperties) {
    this.style = style
  }

  /**
   * 静态工厂方法，返回异步初始化后的实例
   */
  public static create (opt: CreateSketchElementOpt) {
    const { style } = opt
    return new SketchElement(style)
  }

  /**
   * 设置样式
   * @param style
   */
  public setStyle (style?: StyleSheetCssProperties) {
    if (style) this.style = style
    StyleSheet.apply(this, this.style)
  }

  /**
   * 元素初始化
   */
  public async onMount () {
    log('SketchElement.onMount', { node: this })
    const yoga = await YogaLayoutUtils.load()
    this.layout = yoga.Node.create()
    const { layout: parentLayout } = this.parentNode || {}
    parentLayout?.insertChild(this.layout, parentLayout.getChildCount())
    StyleSheet.apply(this, this.style)
    this.isMounted = true
  }

  /**
   * 元素销毁
   */
  public onUnmount () {
    log('SketchElement.onUnmount', { node: this })
    if (!this.layout) return
    this.layout.free()
  }

  /**
   * 添加子元素
   * @param child 子元素
   */
  public async appendChild (child: SketchElement) {
    log('SketchElement.appendChild', { node: this, child })
    child.parentNode = this
    this.childNodes.push(child)
    await child.applyOnMount()
  }

  /**
   * 移除子元素
   * @param child 子元素
   */
  public removeChild (child: SketchElement) {
    log('SketchElement.removeChild', { node: this, child })
    this.childNodes = this.childNodes.filter(item => item !== child)
    child.onUnmount()
  }

  /**
   * 执行初始化逻辑
   */
  public async applyOnMount () {
    if (!this.isRoot && !this._root?.isMounted) return
    await this.onMount()
    return Promise.all(this.childNodes.map(child => {
      return (child as SketchElement).applyOnMount()
    }))
  }

  /**
   * 计算元素相对位置
   */
  public calculateElementRelativePosition = () => {
    if (!this.layout) return defaultPosition
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
    const parentPosition = (this.parentNode as SketchElement)?.calculateElementAbsolutePosition() || defaultPosition
    const relativePosition = this.calculateElementRelativePosition() || defaultPosition
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
    if (!this.layout) return { width: 0, height: 0 }
    this._root?.calculateLayout()
    const width = this.layout.getComputedWidth()
    const height = this.layout.getComputedHeight()
    return { width, height }
  }

  render () {
    return Promise.resolve()
  }
}
