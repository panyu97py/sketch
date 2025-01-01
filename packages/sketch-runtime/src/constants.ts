import YogaLayout from "yoga-layout";
import {StyleSheetCssProperties, StyleSheetCssValues} from "./types";

export const CSS_TO_YOGA_MAP: Partial<Record<keyof StyleSheetCssProperties, Record<StyleSheetCssValues, any>>> = {
    flexDirection: {
        "row": YogaLayout.FLEX_DIRECTION_ROW,
        "row-reverse": YogaLayout.FLEX_DIRECTION_ROW_REVERSE,
        "column": YogaLayout.FLEX_DIRECTION_COLUMN,
        "column-reverse": YogaLayout.FLEX_DIRECTION_COLUMN_REVERSE,
    },
    justifyContent: {
        "flex-start": YogaLayout.JUSTIFY_FLEX_START,
        "flex-end": YogaLayout.JUSTIFY_FLEX_END,
        "center": YogaLayout.JUSTIFY_CENTER,
        "space-between": YogaLayout.JUSTIFY_SPACE_BETWEEN,
        "space-around": YogaLayout.JUSTIFY_SPACE_AROUND,
        "space-evenly": YogaLayout.JUSTIFY_SPACE_EVENLY,
    },
    alignItems: {
        "flex-start": YogaLayout.ALIGN_FLEX_START,
        "flex-end": YogaLayout.ALIGN_FLEX_END,
        "center": YogaLayout.ALIGN_CENTER,
        "stretch": YogaLayout.ALIGN_STRETCH,
        "baseline": YogaLayout.ALIGN_BASELINE,
    },
    alignSelf: {
        "auto": YogaLayout.ALIGN_AUTO,
        "flex-start": YogaLayout.ALIGN_FLEX_START,
        "flex-end": YogaLayout.ALIGN_FLEX_END,
        "center": YogaLayout.ALIGN_CENTER,
        "stretch": YogaLayout.ALIGN_STRETCH,
        "baseline": YogaLayout.ALIGN_BASELINE,
    },
    flexWrap: {
        "wrap": YogaLayout.WRAP_WRAP,
        "nowrap": YogaLayout.WRAP_NO_WRAP,
        "wrap-reverse": YogaLayout.WRAP_WRAP_REVERSE,
    },
    boxSizing: {
        "border-box": YogaLayout.BOX_SIZING_BORDER_BOX,
        "content-box": YogaLayout.BOX_SIZING_CONTENT_BOX,
    },
    position: {
        "static": YogaLayout.POSITION_TYPE_STATIC,
        "relative": YogaLayout.POSITION_TYPE_RELATIVE,
        "absolute": YogaLayout.POSITION_TYPE_ABSOLUTE,
    }
};