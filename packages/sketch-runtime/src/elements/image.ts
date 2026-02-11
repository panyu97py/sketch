import { CreateSketchElementOpt, SketchElement } from './element'
import { StyleSheetDeclaration } from '@/types'
import { Event, EventEmitter, EventListener, log } from '@/utils'

type EventType = 'onerror' | 'onload'

interface CreateSketchImageOpt extends CreateSketchElementOpt {
  src: string
}

/**
 * 图片缓存
 */
const imageCache = new Map<string, HTMLImageElement>()

/**
 * 图片元素
 */
export class SketchImage extends SketchElement {
  /**
   * 图片地址
   * @private
   */
  private readonly src: string

  /**
   * 图片对象
   * @private
   */
  private imageObj: HTMLImageElement

  /**
   * 事件系统
   */
  public eventEmit?: EventEmitter

  /**
   * 构造函数
   * @param src 图片地址
   * @param style 样式
   */
  protected constructor (src: string, style?: StyleSheetDeclaration) {
    super(style)
    this.src = src
    this.eventEmit = new EventEmitter()
  }

  public static create (opt: CreateSketchImageOpt) {
    const { src, style } = opt
    return new SketchImage(src, style)
  }

  /**
   * 加载图片
   * @param src
   */
  async loadImage (src: string) {
    try {
      if (!imageCache.has(src)) {
        const tempImageObj = document.createElement('img')
        tempImageObj.src = src
        await new Promise((resolve, reject) => {
          tempImageObj.onload = resolve
          tempImageObj.onerror = reject
        })
        this.dispatchEvent(new Event('onload', this))
        imageCache.set(src, tempImageObj)
      }
      return imageCache.get(src)!
    } catch (error) {
      this.dispatchEvent(new Event('onerror', error))
      throw error
    }
  }

  /**
   * 元素初始化
   * @desc 初始化图片对象
   */
  public async onMount () {
    this.imageObj = await this.loadImage(this.src)
    return super.onMount()
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

  /**
   * 渲染函数
   */
  render = () => {
    if (!this.renderable) return

    // 计算布局位置
    this._root!.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    log('SketchImage.render', { left, top, width, height, node: this })

    // 渲染元素
    const { ctx } = this._root!

    if (!ctx) return

    ctx.save()

    super.render(false)

    ctx.drawImage(this.imageObj, left, top, width, height)

    ctx.restore()
  }
}
