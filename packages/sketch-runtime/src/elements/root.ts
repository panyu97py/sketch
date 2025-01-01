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
  }

  public get _root (): SketchRoot {
    return this
  }

  private recursiveRender (node: SketchNode) {
    const { childNodes } = node
    childNodes.forEach((child) => {
      child.render()
      this.recursiveRender(child)
    })
  }

  public calculateLayout = () => {
    this.layout.calculateLayout('auto', 'auto', YogaLayout.DIRECTION_LTR)
  }

  public render () {
    this.recursiveRender(this)
  }

  public toDataURL (type?: string, quality?: any) {
    return this.canvas.toDataURL(type, quality)
  }
}
