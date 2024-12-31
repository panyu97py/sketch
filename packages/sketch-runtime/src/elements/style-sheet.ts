import {StyleSheetCssProperties} from "../types/style-sheet";

export class StyleSheet {
    static create(style: Record<string, StyleSheetCssProperties>) {
        return style;
    }
}