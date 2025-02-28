import { Direction } from '@sketchjs/yoga-layout'
import { CreateSketchElementOpt } from './element'
import { StyleSheetCssProperties } from '../types'
import { SketchNode } from './node'
import { SketchView } from './view'

interface CreateSketchRootOpt extends CreateSketchElementOpt {
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
}

/**
 * 画布根节点
 */
export class SketchRoot extends SketchView {
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
   */
  constructor () {
    super()
    const propertyOpt = { writable: false, enumerable: true, configurable: false }
    Object.defineProperty(this, 'displayName', { ...propertyOpt, value: 'ROOT' })
  }

  public static async create (opt:CreateSketchRootOpt) {
    const element = new SketchRoot()
    await element.init(opt)
    return element
  }

  /**
   * 设置样式
   * @param style
   */
  public setStyle (style?: StyleSheetCssProperties) {
    super.setStyle(style)
    const { width, height } = this.getElementSize()
    this.canvas.width = width
    this.canvas.height = height
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
   * 渲染自己的样式
   */
  public async renderSelf () {
    return super.render()
  }

  /**
   * 初始化
   * @param opt
   */
  public async init (opt:CreateSketchRootOpt) {
    const { ctx, canvas } = opt
    this.canvas = canvas
    this.ctx = ctx
    await super.init(opt)
    await this.applyOnMount()
  }

  /**
   * 渲染函数
   */
  public async render () {
    await this.renderSelf()
    await this.recursiveRender(this)
  }

  /**
   * 输出为图片
   */
  public toDataURL (type?: string, quality?: any) {
    return this.canvas.toDataURL(type, quality)
  }
}
