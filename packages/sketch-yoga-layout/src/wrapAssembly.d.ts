/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import YGEnums, { Unit, Direction } from './generated/YGEnums'
import type { Align, BoxSizing, Display, Edge, Errata, ExperimentalFeature, FlexDirection, Gutter, Justify, MeasureMode, Overflow, PositionType, Wrap } from './generated/YGEnums'
type Layout = {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
};
type Size = {
    width: number;
    height: number;
};
type Value = {
    unit: Unit;
    value: number;
};
export type Config = {
    free(): void;
    isExperimentalFeatureEnabled(feature: ExperimentalFeature): boolean;
    setExperimentalFeatureEnabled(feature: ExperimentalFeature, enabled: boolean): void;
    setPointScaleFactor(factor: number): void;
    getErrata(): Errata;
    setErrata(errata: Errata): void;
    useWebDefaults(): boolean;
    setUseWebDefaults(useWebDefaults: boolean): void;
};
export type DirtiedFunction = (node: Node) => void;
export type MeasureFunction = (width: number, widthMode: MeasureMode, height: number, heightMode: MeasureMode) => Size;
export type Node = {
    calculateLayout(width: number | 'auto' | undefined, height: number | 'auto' | undefined, direction?: Direction): void;
    copyStyle(node: Node): void;
    free(): void;
    freeRecursive(): void;
    getAlignContent(): Align;
    getAlignItems(): Align;
    getAlignSelf(): Align;
    getAspectRatio(): number;
    getBorder(edge: Edge): number;
    getChild(index: number): Node;
    getChildCount(): number;
    getComputedBorder(edge: Edge): number;
    getComputedBottom(): number;
    getComputedHeight(): number;
    getComputedLayout(): Layout;
    getComputedLeft(): number;
    getComputedMargin(edge: Edge): number;
    getComputedPadding(edge: Edge): number;
    getComputedRight(): number;
    getComputedTop(): number;
    getComputedWidth(): number;
    getDirection(): Direction;
    getDisplay(): Display;
    getFlexBasis(): Value;
    getFlexDirection(): FlexDirection;
    getFlexGrow(): number;
    getFlexShrink(): number;
    getFlexWrap(): Wrap;
    getHeight(): Value;
    getJustifyContent(): Justify;
    getGap(gutter: Gutter): Value;
    getMargin(edge: Edge): Value;
    getMaxHeight(): Value;
    getMaxWidth(): Value;
    getMinHeight(): Value;
    getMinWidth(): Value;
    getOverflow(): Overflow;
    getPadding(edge: Edge): Value;
    getParent(): Node | null;
    getPosition(edge: Edge): Value;
    getPositionType(): PositionType;
    getBoxSizing(): BoxSizing;
    getWidth(): Value;
    insertChild(child: Node, index: number): void;
    isDirty(): boolean;
    isReferenceBaseline(): boolean;
    markDirty(): void;
    hasNewLayout(): boolean;
    markLayoutSeen(): void;
    removeChild(child: Node): void;
    reset(): void;
    setAlignContent(alignContent: Align): void;
    setAlignItems(alignItems: Align): void;
    setAlignSelf(alignSelf: Align): void;
    setAspectRatio(aspectRatio: number | undefined): void;
    setBorder(edge: Edge, borderWidth: number | undefined): void;
    setDirection(direction: Direction): void;
    setDisplay(display: Display): void;
    setFlex(flex: number | undefined): void;
    setFlexBasis(flexBasis: number | 'auto' | `${number}%` | undefined): void;
    setFlexBasisPercent(flexBasis: number | undefined): void;
    setFlexBasisAuto(): void;
    setFlexDirection(flexDirection: FlexDirection): void;
    setFlexGrow(flexGrow: number | undefined): void;
    setFlexShrink(flexShrink: number | undefined): void;
    setFlexWrap(flexWrap: Wrap): void;
    setHeight(height: number | 'auto' | `${number}%` | undefined): void;
    setIsReferenceBaseline(isReferenceBaseline: boolean): void;
    setHeightAuto(): void;
    setHeightPercent(height: number | undefined): void;
    setJustifyContent(justifyContent: Justify): void;
    setGap(gutter: Gutter, gapLength: number | `${number}%` | undefined): Value;
    setGapPercent(gutter: Gutter, gapLength: number | undefined): Value;
    setMargin(edge: Edge, margin: number | 'auto' | `${number}%` | undefined): void;
    setMarginAuto(edge: Edge): void;
    setMarginPercent(edge: Edge, margin: number | undefined): void;
    setMaxHeight(maxHeight: number | `${number}%` | undefined): void;
    setMaxHeightPercent(maxHeight: number | undefined): void;
    setMaxWidth(maxWidth: number | `${number}%` | undefined): void;
    setMaxWidthPercent(maxWidth: number | undefined): void;
    setDirtiedFunc(dirtiedFunc: DirtiedFunction | null): void;
    setMeasureFunc(measureFunc: MeasureFunction | null): void;
    setMinHeight(minHeight: number | `${number}%` | undefined): void;
    setMinHeightPercent(minHeight: number | undefined): void;
    setMinWidth(minWidth: number | `${number}%` | undefined): void;
    setMinWidthPercent(minWidth: number | undefined): void;
    setOverflow(overflow: Overflow): void;
    setPadding(edge: Edge, padding: number | `${number}%` | undefined): void;
    setPaddingPercent(edge: Edge, padding: number | undefined): void;
    setPosition(edge: Edge, position: number | `${number}%` | undefined): void;
    setPositionPercent(edge: Edge, position: number | undefined): void;
    setPositionType(positionType: PositionType): void;
    setPositionAuto(edge: Edge): void;
    setBoxSizing(boxSizing: BoxSizing): void;
    setWidth(width: number | 'auto' | `${number}%` | undefined): void;
    setWidthAuto(): void;
    setWidthPercent(width: number | undefined): void;
    unsetDirtiedFunc(): void;
    unsetMeasureFunc(): void;
    setAlwaysFormsContainingBlock(alwaysFormsContainingBlock: boolean): void;
};
export type Yoga = {
    Config: {
        create(): Config;
        destroy(config: Config): void;
    };
    Node: {
        create(config?: Config): Node;
        createDefault(): Node;
        createWithConfig(config: Config): Node;
        destroy(node: Node): void;
    };
} & typeof YGEnums;
export default function wrapAssembly(lib: any): Yoga
export {}
