import isEmpty from 'lodash-es/isEmpty'
import YogaLayout from 'yoga-layout'
import {StyleSheetCssProperties} from "../types";
import {CSS_TO_YOGA_MAP} from "../constants"
import {SketchNode} from "./node";

export class StyleSheet {
    static create(styles: Record<string, StyleSheetCssProperties>) {
        return styles;
    }

    static apply(sketchNode: SketchNode, style?: StyleSheetCssProperties) {
        if (!style) return
        Object.keys(style).forEach((cssProperty: keyof StyleSheetCssProperties) => {
            const {[cssProperty]: cssValue} = style;
            if (isEmpty(cssValue)) return
            const {[cssValue!]: yogaLayoutValue} = CSS_TO_YOGA_MAP[cssProperty] || {};
            const finalValue = yogaLayoutValue || cssValue;
            switch (cssProperty) {
                case 'width':
                    return sketchNode.layout.setWidth(finalValue);
                case "minWidth":
                    return sketchNode.layout.setMinWidth(finalValue);
                case "maxWidth":
                    return sketchNode.layout.setMaxWidth(finalValue);
                case 'height':
                    return sketchNode.layout.setHeight(finalValue);
                case "minHeight":
                    return sketchNode.layout.setMinHeight(finalValue);
                case "maxHeight":
                    return sketchNode.layout.setMaxHeight(finalValue);
                case "boxSizing":
                    return sketchNode.layout.setBoxSizing(finalValue);
                case 'flex':
                    return sketchNode.layout.setFlex(finalValue);
                case "flexWrap":
                    return sketchNode.layout.setFlexWrap(finalValue);
                case 'flexDirection':
                    return sketchNode.layout.setFlexDirection(finalValue);
                case 'justifyContent':
                    return sketchNode.layout.setJustifyContent(finalValue);
                case 'alignItems':
                    return sketchNode.layout.setAlignItems(finalValue);
                case 'alignSelf':
                    return sketchNode.layout.setAlignSelf(finalValue);
                case "position":
                    return sketchNode.layout.setPositionType(finalValue);
                case "top":
                    return sketchNode.layout.setPosition(YogaLayout.EDGE_TOP, finalValue);
                case "right":
                    return sketchNode.layout.setPosition(YogaLayout.EDGE_RIGHT, finalValue);
                case "bottom":
                    return sketchNode.layout.setPosition(YogaLayout.EDGE_BOTTOM, finalValue);
                case "left":
                    return sketchNode.layout.setPosition(YogaLayout.EDGE_LEFT, finalValue);
                case 'margin':
                    return sketchNode.layout.setMargin(YogaLayout.EDGE_ALL, finalValue);
                case 'marginTop':
                    return sketchNode.layout.setMargin(YogaLayout.EDGE_TOP, finalValue);
                case 'marginRight':
                    return sketchNode.layout.setMargin(YogaLayout.EDGE_RIGHT, finalValue);
                case 'marginBottom':
                    return sketchNode.layout.setMargin(YogaLayout.EDGE_BOTTOM, finalValue);
                case 'marginLeft':
                    return sketchNode.layout.setMargin(YogaLayout.EDGE_LEFT, finalValue);
                case 'padding':
                    return sketchNode.layout.setPadding(YogaLayout.EDGE_ALL, finalValue);
                case 'paddingTop':
                    return sketchNode.layout.setPadding(YogaLayout.EDGE_TOP, finalValue);
                case 'paddingRight':
                    return sketchNode.layout.setPadding(YogaLayout.EDGE_RIGHT, finalValue);
                case 'paddingBottom':
                    return sketchNode.layout.setPadding(YogaLayout.EDGE_BOTTOM, finalValue);
                case 'paddingLeft':
                    return sketchNode.layout.setPadding(YogaLayout.EDGE_LEFT, finalValue);
                default:
                    break;
            }
        });
    }
}