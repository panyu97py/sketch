import {SketchElement} from "./element";

export class SketchRoot extends SketchElement {

    public get _root (): SketchRoot {
        return this
    }
}