import { SketchImage } from '@sketchjs/runtime'
import Taro from '@tarojs/taro'
/**
 * 图片缓存
 */
const imageCache = new Map<string, HTMLImageElement>()

export class SketchAppletImage extends SketchImage {
  /**
   * 加载图片
   * @param url
   */
  loadImage = async (url: string) => {
    if (!this._root) return
    if (imageCache[url]) return imageCache[url]
    const image = (this._root.canvas as unknown as Taro.Canvas).createImage()
    return new Promise((resolve) => {
      image.onload = () => {
        imageCache[url] = image
        resolve(image)
      }
      image.src = url // 要加载的图片 url
    })
  }
}
