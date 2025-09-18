import { Direction } from '@sketchjs/yoga-layout'
import { StyleSheetDeclaration } from '@/types'
import { Event, EventEmitter, EventListener, log } from '@/utils'
import { patchRoundRect } from '@/patch'
import { CreateSketchElementOpt, SketchElement } from './element'
import { SketchView } from './view'

interface CreateSketchRootOpt extends CreateSketchElementOpt {
    ctx?: CanvasRenderingContext2D,
    canvas?: HTMLCanvasElement,
}

type EventType = 'elementUpdate' | 'initialized'

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
   * 构造函数
   */
  constructor (canvas?: HTMLCanvasElement, ctx?: CanvasRenderingContext2D, style?: StyleSheetDeclaration) {
    super(style)
    this.canvas = canvas
    this.ctx = patchRoundRect(ctx)
    this.eventEmit = new EventEmitter()
  }

  public static create (opt?:CreateSketchRootOpt) {
    const { canvas, ctx, style } = opt || {}
    return new SketchRoot(canvas, ctx, style)
  }

  /**
   * 获取根节点
   */
  public get _root (): SketchRoot {
    return this
  }

  /**
   * 获取是否可渲染
   */
  public get renderable () {
    return Boolean(this.isMounted && this.ctx && this.canvas)
  }

  /**
   * 递归渲染
   * @param node
   * @private
   */
  private recursiveRender (node: SketchElement) {
    const { childNodes } = node
    childNodes.forEach((child) => {
      child.render()
      this.recursiveRender(child)
    })
  }

  /**
   * 初始化画布大小
   * @private
   */
  private refreshCanvasSize () {
    if (!this.isMounted || !this.canvas) return
    const { width, height } = this.getElementSize()
    log('SketchRoot.refreshCanvasSize', { width, height })
    this.canvas.width = width
    this.canvas.height = height
  }

  /**
   * 设置样式
   * @param style
   */
  public setStyle (style?: StyleSheetDeclaration) {
    super.setStyle(style)
    this.refreshCanvasSize()
  }

  /**
   * 计算布局
   */
  public calculateLayout = () => {
    if (!this.layout) return
    this.layout.calculateLayout('auto', 'auto', Direction.LTR)
  }

  /**
   * 初始化
   * @param opt
   */
  public async init (opt?:CreateSketchRootOpt) {
    log('SketchRoot.init', { opt })
    const { ctx, canvas, style } = opt || {}
    this.canvas = canvas || this.canvas
    this.ctx = patchRoundRect(ctx || this.ctx)
    this.setStyle(style)
    if (!this.ctx || !this.canvas) return Promise.reject(new Error('canvas or ctx is empty'))
    await this.applyOnMount()
    this.dispatchEvent(new Event('initialized', this))
  }

  /**
   * 渲染函数
   */
  public render () {
    log('SketchRoot.render', { node: this })
    if (!this.renderable) return
    this.refreshCanvasSize()
    const { width = 0, height = 0 } = this.canvas!
    this.ctx?.clearRect(0, 0, width, height)
    super.render()
    this.recursiveRender(this)
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
  public addEventListener (eventType: EventType, listener: EventListener) {
    return super.addEventListener(eventType, listener)
  }

  /**
   * 移除事件监听
   * @param eventType
   * @param listener
   */
  public removeEventListener (eventType: EventType, listener: EventListener) {
    return super.removeEventListener(eventType, listener)
  }
}
