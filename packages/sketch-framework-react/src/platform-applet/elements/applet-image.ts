import Taro from '@tarojs/taro'
import { CreateSketchElementOpt, Event, SketchImage } from '@sketchjs/runtime'

interface CreateSketchAppletImageOpt extends CreateSketchElementOpt {
  src: string
}

/**
 * 图片缓存
 */
const imageCache = new Map<string, any>()

export class SketchAppletImage extends SketchImage {
  public static create (opt: CreateSketchAppletImageOpt) {
    const { src, style } = opt
    return new SketchAppletImage(src, style)
  }

  /**
   * 加载图片
   * @param src
   */
  async loadImage (src: string) {
    try {
      if (!this._root) return
      if (!imageCache.has(src)) {
        const tempImageObj = (this._root.canvas as unknown as Taro.Canvas).createImage()
        await new Promise((resolve, reject) => {
          tempImageObj.onload = resolve
          tempImageObj.onerror = reject
          tempImageObj.src = src
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
}
