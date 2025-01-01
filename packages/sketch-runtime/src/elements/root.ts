import { SketchElement } from './element'
import { SketchNode } from './node'
import YogaLayout from 'yoga-layout'

/**
 * 画布根节点
 */
export class SketchRoot extends SketchElement {
  /**
     * 画布上下文
     */
  public ctx: CanvasRenderingContext2D

  /**
     * 画布元素
     */
  public canvas: HTMLCanvasElement

  /**
     * 构造函数
     * @param canvas 画布元素
     * @param ctx 画布上下文
     */
  constructor (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    super()
    this.ctx = ctx
    this.canvas = canvas
    const propertyOpt = { writable: false, enumerable: true, configurable: false }
    Object.defineProperty(this, 'displayName', { ...propertyOpt, value: 'ROOT' })
  }

  /**
     * 获取根节点
     */
  public get _root (): SketchRoot {
    return this
  }

  /**
     * 设置画布大小
     * @param width
     * @param height
     */
  public setSize (width: number, height: number) {
    this.canvas.width = width
    this.canvas.height = height
    this.layout.setWidth(width)
    this.layout.setHeight(height)
  }

  /**
     * 递归渲染
     * @param node
     * @private
     */
  private recursiveRender (node: SketchNode) {
    const { childNodes } = node
    return Promise.all(childNodes.map((child) => {
      return Promise.all([child.render(), this.recursiveRender(child)])
    }))
  }

  /**
     * 计算布局
     */
  public calculateLayout = () => {
    this.layout.calculateLayout('auto', 'auto', YogaLayout.DIRECTION_LTR)
  }

  /**
     * 渲染函数
     */
  public render () {
    return this.recursiveRender(this)
  }

  /**
     * 输出为图片
     */
  public toDataURL (type?: string, quality?: any) {
    return this.canvas.toDataURL(type, quality)
  }
}
