import { SketchElement } from './element'
import { SketchNode } from './node'
import YogaLayout from 'yoga-layout'

export class SketchRoot extends SketchElement {
  public ctx: CanvasRenderingContext2D

  public canvas: HTMLCanvasElement

  constructor (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    super()
    this.ctx = ctx
    this.canvas = canvas
    const propertyOpt = { writable: false, enumerable: true, configurable: false }
    Object.defineProperty(this, 'displayName', { ...propertyOpt, value: 'ROOT' })
  }

  public get _root (): SketchRoot {
    return this
  }

  public setSize (width: number, height: number) {
    this.canvas.width = width
    this.canvas.height = height
    this.layout.setWidth(width)
    this.layout.setHeight(height)
  }

  private recursiveRender (node: SketchNode) {
    const { childNodes } = node
    return Promise.all(childNodes.map((child) => {
      return Promise.all([child.render(), this.recursiveRender(child)])
    }))
  }

  public calculateLayout = () => {
    this.layout.calculateLayout('auto', 'auto', YogaLayout.DIRECTION_LTR)
  }

  public render () {
    return this.recursiveRender(this)
  }

  public toDataURL (type?: string, quality?: any) {
    return this.canvas.toDataURL(type, quality)
  }
}
