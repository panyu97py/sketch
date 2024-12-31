import {SketchRoot} from "./root";
import Yoga, {Node as YogaNode} from 'yoga-layout';

export abstract class SketchNode {

    public layout: YogaNode

    public parentNode: SketchNode | null = null

    public childNodes: SketchNode[] = []

    public abstract render(): void

    protected constructor() {
        this.layout = Yoga.Node.create()
    }

    public get _root(): SketchRoot | null {
        return this.parentNode?._root || null
    }

    public appendChild(newChild: SketchNode) {
        newChild.parentNode = this
        this.childNodes.push(newChild)
        this.layout.insertChild(newChild.layout, this.layout.getChildCount())
    }
}

