import { SketchElement } from './element'
import { SketchNode } from './node'

export class SketchRoot extends SketchElement {
  public ctx?: CanvasRenderingContext2D

  public canvas?: HTMLCanvasElement

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

  public render () {
    this.recursiveRender(this)
  }

  public toDataURL () {
  }
}
