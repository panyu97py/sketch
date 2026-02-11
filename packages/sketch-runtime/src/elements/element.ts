import { Node as YogaLayoutNode } from '@sketchjs/yoga-layout'
import { StyleSheetDeclaration } from '@/types'
import { Event, EventEmitter, EventListener, log, YogaLayoutUtils } from '@/utils'
import { StyleSheet } from './style-sheet'
import { SketchRoot } from './root'

const defaultPosition = { top: 0, left: 0, bottom: 0, right: 0 }

export interface CreateSketchElementOpt {
  style?: StyleSheetDeclaration
}

/**
 * 设计元素
 */
export class SketchElement {
  /**
   * 是否准备就绪
   */
  public isMounted = false

  /**
   * 布局节点是否已插入父节点
   */
  public isLayoutInserted = false

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
  public layout?: YogaLayoutNode | null = null

  /**
   * 样式
   */
  private originStyle?: StyleSheetDeclaration

  /**
   * 事件系统
   */
  public eventEmit?: EventEmitter

  /**
   * 是否为根节点
   */
  public get _isRoot () {
    return this === this._root as SketchElement
  }

  /**
   * 是否可渲染
   */
  public get renderable () {
    return Boolean(this._root?.renderable && this.isMounted)
  }

  /**
   * 获取根节点
   */
  public get _root (): SketchRoot | null {
    return this.parentNode?._root || null
  }

  public get style () {
    return StyleSheet.transform(this.originStyle || {})
  }

  /**
   * 构造函数
   * @param style 样式
   */
  protected constructor (style?: StyleSheetDeclaration) {
    this.setStyle(style)
  }

  /**
   * 静态工厂方法，返回异步初始化后的实例
   */
  public static create (opt?: CreateSketchElementOpt) {
    const { style } = opt || {}
    return new SketchElement(style)
  }

  /**
   * 设置样式
   * @param style
   */
  public setStyle (style?: StyleSheetDeclaration) {
    if (style) this.originStyle = style
    StyleSheet.apply(this, this.style)
  }

  /**
   * 将当前布局节点插入到父节点中
   * @private
   */
  private async insertCurLayoutNodeToParent () {
    // 移除当前布局节点避免重复插入
    this.removeCurLayoutNodeFromParent()

    // 创建布局节点
    const yoga = await YogaLayoutUtils.load()
    this.layout = yoga.Node.create()

    // 应用样式
    StyleSheet.apply(this, this.style)

    // 插入到父节点布局中
    if (!this.parentNode) return
    const { layout: parentLayout, childNodes } = this.parentNode
    const targetIndex = childNodes.indexOf(this)
    const realIndex = childNodes.slice(0, targetIndex).filter(n => n.isLayoutInserted).length
    parentLayout?.insertChild(this.layout, realIndex)
    this.isLayoutInserted = true
  }

  /**
   * 将当前布局节点从父节点中移除
   * @private
   */
  private removeCurLayoutNodeFromParent () {
    if (!this.layout) return
    this.parentNode?.layout?.removeChild(this.layout)
    this.layout.free()
    this.layout = null
    this.isLayoutInserted = false
  }

  /**
   * 元素初始化
   */
  public async onMount () {
    log('SketchElement.onMount', { node: this })
    return this.insertCurLayoutNodeToParent()
  }

  /**
   * 元素销毁
   */
  public onUnmount () {
    log('SketchElement.onUnmount', { node: this })
    return this.removeCurLayoutNodeFromParent()
  }

  /**
   * 添加子元素
   * @param child 子元素
   */
  public async appendChild (child?: SketchElement) {
    log('SketchElement.appendChild', { node: this, child })
    if (!child) return
    return this.insertBefore(child)
  }

  /**
   * 插入子元素
   * @param newChild 新子元素
   * @param refChild 参照子元素
   */
  public async insertBefore (newChild?: SketchElement, refChild?: SketchElement) {
    log('SketchElement.insertBefore', { node: this, newChild, refChild })

    if (!newChild) return

    const refChildIndex = refChild ? this.childNodes.indexOf(refChild) : -1

    if (refChildIndex >= 0) this.childNodes.splice(refChildIndex, 0, newChild)

    if (refChildIndex < 0) this.childNodes.push(newChild)

    newChild.parentNode = this
    await newChild.applyOnMount()
    this._root?.dispatchEvent(new Event('elementUpdate', newChild))
  }

  /**
   * 移除子元素
   * @param child 子元素
   */
  public removeChild (child?: SketchElement) {
    log('SketchElement.removeChild', { node: this, child })
    if (!child) return
    child.applyOnUnmount()
    this.childNodes = this.childNodes.filter(item => item !== child)
    this._root?.dispatchEvent(new Event('elementUpdate', child))
  }

  /**
   * 执行初始化逻辑
   */
  public async applyOnMount () {
    if (!this._isRoot && !this.parentNode?.isMounted) return
    if (!this.isMounted) await this.onMount()
    this.isMounted = true
    return Promise.all(this.childNodes.map(child => (child as SketchElement).applyOnMount()))
  }

  /**
   * 执行销毁逻辑
   */
  public applyOnUnmount () {
    this.childNodes.forEach(child => (child as SketchElement).applyOnUnmount())
    if (this.isMounted) this.onUnmount()
    this.isMounted = false
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

  /**
   * 新增事件监听
   * @param eventType
   * @param listener
   */
  public addEventListener (eventType: string, listener: EventListener) {
    return this.eventEmit?.addEventListener(eventType, listener)
  }

  /**
   * 移除事件监听
   * @param eventType
   * @param listener
   */
  public removeEventListener (eventType: string, listener: EventListener) {
    return this.eventEmit?.removeEventListener(eventType, listener)
  }

  /**
   * 触发事件监听
   * @param event
   */
  public dispatchEvent (event: Event) {
    return this.eventEmit?.dispatchEvent(event)
  }

  render (saveState = true) {
    if (!this.renderable) return

    // 计算布局位置
    this._root!.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()
    const { borderRadius = [0, 0, 0, 0] } = this.style || {}

    // 渲染元素
    const { ctx } = this._root!
    if (!ctx) return
    saveState && ctx.save()
    ctx.fillStyle = this.style?.backgroundColor || 'transparent'
    ctx.lineWidth = this.style?.borderWidth || 0
    ctx.strokeStyle = this.style?.borderColor || 'transparent'
    ctx.beginPath()
    ctx.roundRect(left, top, width, height, borderRadius)
    ctx.closePath()
    ctx.clip()
    ctx.fill()
    ctx.stroke()
    saveState && ctx.restore()
  }
}
