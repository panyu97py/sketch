import { CreateSketchElementOpt, SketchElement } from './element'
import { SketchNode } from './node'
import { Direction } from 'yoga-layout/load'
import { StyleSheetCssProperties } from '../types'
import { StyleSheet } from './style-sheet'

interface CreateSketchRootOpt extends CreateSketchElementOpt {
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
}

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
   * @param style
   */
  protected constructor (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, style?: StyleSheetCssProperties) {
    super(style)
    this.ctx = ctx
    this.canvas = canvas
    const propertyOpt = { writable: false, enumerable: true, configurable: false }
    Object.defineProperty(this, 'displayName', { ...propertyOpt, value: 'ROOT' })
  }

  public static async create (opt: CreateSketchRootOpt) {
    const { canvas, ctx, style } = opt
    const element = new SketchRoot(canvas, ctx, style)
    await element.initializeLayout()
    StyleSheet.apply(element, style)
    const { width, height } = element.getElementSize()
    canvas.width = width
    canvas.height = height
    return element
  }

  /**
   * 获取根节点
   */
  public get _root (): SketchRoot {
    return this
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
    this.layout.calculateLayout('auto', 'auto', Direction.LTR)
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
