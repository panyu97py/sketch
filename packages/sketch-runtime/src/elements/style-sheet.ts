import {StyleSheetCssProperties} from "../types";
import {SketchNode} from "./node";

export class StyleSheet {
    static create(styles: Record<string, StyleSheetCssProperties>) {
        return styles;
    }

    static apply(sketchNode: SketchNode, style?: StyleSheetCssProperties) {
    }
}