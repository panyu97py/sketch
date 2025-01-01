import { SketchRoot } from './root'

/**
 * 节点
 */
export abstract class SketchNode {
  /**
     * 父节点
     */
  public parentNode: SketchNode | null = null

  /**
     * 子节点
     */
  public childNodes: SketchNode[] = []

    /**
     * 渲染函数抽象
     */
    public abstract render(): Promise<void>

    /**
     * 获取根节点
     */
    public get _root (): SketchRoot | null {
      return this.parentNode?._root || null
    }

    /**
     * 插入根节点
     */
    public appendChild (newChild: SketchNode) {
      newChild.parentNode = this
      this.childNodes.push(newChild)
    }
}
