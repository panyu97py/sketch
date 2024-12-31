import {SketchRoot} from "./root";

export class SketchNode {

    public parentNode: SketchNode | null = null

    public childNodes: SketchNode[] = []

    public get _root (): SketchRoot | null {
        return this.parentNode?._root || null
    }

    public appendChild (newChild: SketchNode) {
        newChild.parentNode = this
        this.childNodes.push(newChild)
    }
}

