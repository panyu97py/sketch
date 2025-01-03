import { SketchRoot } from './root'

/**
 * 节点
 */
export abstract class SketchNode {
  /**
   * 渲染函数抽象
   */
  public abstract render(): Promise<void>

  /**
   * 子节点
   */
  public childNodes: SketchNode[] = []

  /**
     * 父节点
     */
  public parentNode: SketchNode | null = null

  /**
     * 获取根节点
     */
  public get _root (): SketchRoot | null {
    return this.parentNode?._root || null
  }

  /**
     * 插入子节点
     */
  public appendChild (newChild: SketchNode) {
    newChild.parentNode = this
    this.childNodes.push(newChild)
  }


  /**
   * 移除子节点
   * @param child
   */
  public removeChild (child: SketchNode) {
    this.childNodes = this.childNodes.filter(item => item !== child)
  }
}
