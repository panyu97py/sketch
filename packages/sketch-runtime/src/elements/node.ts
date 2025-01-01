import { SketchRoot } from './root'

export abstract class SketchNode {
  public parentNode: SketchNode | null = null

  public childNodes: SketchNode[] = []

    public abstract render(): void

    public get _root (): SketchRoot | null {
      return this.parentNode?._root || null
    }

    public appendChild (newChild: SketchNode) {
      newChild.parentNode = this
      this.childNodes.push(newChild)
    }
}
