import { Direction } from '@sketchjs/yoga-layout'
import { StyleSheetCssProperties } from '../types'
import { CreateSketchElementOpt, SketchElement } from './element'
import { SketchView } from './view'
import { CustomEvent, EventEmitter, EventListener, log } from '../utils'

interface CreateSketchRootOpt extends CreateSketchElementOpt {
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
}

type EventType = 'elementUpdate'|'initialized'

/**
 * 画布根节点
 */
export class SketchRoot extends SketchView {
  /**
   * 画布上下文
   */
  public ctx?: CanvasRenderingContext2D

  /**
   * 画布元素
   */
  public canvas?: HTMLCanvasElement

  /**
   * 事件系统
   * @private
   */
  private eventEmit?:EventEmitter

  /**
   * 构造函数
   */
  constructor (canvas?: HTMLCanvasElement, ctx?: CanvasRenderingContext2D, style?: StyleSheetCssProperties) {
    super(style)
    this.ctx = ctx
    this.canvas = canvas
    this.eventEmit = new EventEmitter()
    const propertyOpt = { writable: false, enumerable: true, configurable: false }
    Object.defineProperty(this, 'displayName', { ...propertyOpt, value: 'ROOT' })
  }

  public static create (opt:CreateSketchRootOpt) {
    const { canvas, ctx, style } = opt
    return new SketchRoot(canvas, ctx, style)
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
  private recursiveRender (node: SketchElement) {
    const { childNodes } = node
    return Promise.all(childNodes.map((child) => {
      return Promise.all([child.render(), this.recursiveRender(child)])
    }))
  }

  /**
   * 初始化画布大小
   * @private
   */
  private setCanvasSize () {
    if (!this.isMounted || !this.canvas) return
    const { width, height } = this.getElementSize()
    this.canvas.width = width
    this.canvas.height = height
  }

  /**
   * 设置样式
   * @param style
   */
  public setStyle (style?: StyleSheetCssProperties) {
    super.setStyle(style)
    this.setCanvasSize()
  }

  /**
   * 计算布局
   */
  public calculateLayout = () => {
    if (!this.layout) return
    this.layout.calculateLayout('auto', 'auto', Direction.LTR)
  }

  /**
   * 元素初始化
   */
  public async onMount () {
    await super.onMount()
    this.setCanvasSize()
  }

  /**
   * 初始化
   * @param opt
   */
  public async init (opt:CreateSketchRootOpt) {
    const { ctx, canvas } = opt
    this.ctx = ctx
    this.canvas = canvas
    await this.applyOnMount()
    this.dispatchEvent(new CustomEvent('initialized', this))
  }

  /**
   * 渲染函数
   */
  public async render () {
    log('SketchRoot.render', { node: this })
    await super.render()
    await this.recursiveRender(this)
  }

  /**
   * 输出为图片
   */
  public toDataURL (type: string, quality?: any) {
    if (!this.canvas) return
    return this.canvas.toDataURL(type, quality)
  }

  /**
   * 新增事件监听
   * @param eventType
   * @param listener
   */
  public addEventListener (eventType:EventType, listener:EventListener) {
    return this.eventEmit?.addEventListener(eventType, listener)
  }

  /**
   * 移除事件监听
   * @param eventType
   * @param listener
   */
  public removeEventListener (eventType:EventType, listener:EventListener) {
    return this.eventEmit?.removeEventListener(eventType, listener)
  }

  /**
   * 触发事件监听
   * @param event
   */
  public dispatchEvent (event:CustomEvent) {
    return this.eventEmit?.dispatchEvent(event)
  }
}
