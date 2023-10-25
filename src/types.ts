import React, {MouseEvent, ReactNode} from 'react';
import CSS from 'csstype';
import {ThemeProps, CSSObject} from 'styled-components';
import {themeName} from './config';

export type RecordOption<K extends keyof any, T> = {
    [P in K]?: T;
};

export interface FCChildrenProps {
    style?: CSS.Properties,
    className?: string,
    forwardAs?: 'div'|'section'|'ul'|'li'|'a'|'p'|'span';
    forwardRef?: any;
    id?: string|number;
    key?: string|number;
    children?: ReactNode,
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}


export type NoXsMediaSize = Exclude<TMediaSize, 'xs'>

export type TThemeProps = ThemeProps<{[themeName]: IGridSetting}>;
export type TStyledProps<P> = TThemeProps & P;





/** -------------------------------
 *             Media
 * ------------------------------ */


export type TStrings = TemplateStringsArray | CSSObject
export type TMediaSizeUnit = 'px' | 'rem';
export type TGutterWidth = `${number}${TMediaSizeUnit}`;

export type TMediaSize = 'xs'|'sm'|'md'|'lg'|'xl'|'xxl'

export interface IBreakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
}
export type TContainerMaxWidths = Omit<IBreakpoints, 'xs'>

export type TMedia = Omit<{ [size in TMediaSize]: Function }, 'xs'> & { px2vw: Function }





/** -------------------------------
 *         GirdProvide
 * ------------------------------ */
export interface IGridThemeProviderProps {
    gridTheme?: Partial<IGridSetting>
    children: React.ReactNode
}

export interface IGridSetting {
    spacer: TGutterWidth
    gutter: TGutterWidth
    gridColumns: number
    gridBreakpoints: IBreakpoints
    containerMaxWidths: TContainerMaxWidths
}
export type TGridTheme = Partial<IGridSetting>;



/** -------------------------------
 *             Container
 * ------------------------------ */
export type TRWDMaxSize = {
    [size in NoXsMediaSize | 'fluid']: boolean
}
export type TContainerFluid = true|NoXsMediaSize

export interface IContainerProps extends FCChildrenProps{
    fluid?: TContainerFluid;
}



/** -------------------------------
 *       Grid System - Row
 * ------------------------------ */
export interface IRowProps extends FCChildrenProps {
}


/** -------------------------------
 *       Grid System - Col
 * ------------------------------ */
export type TCol = number | true | 'auto' | undefined;
export type TColOffset = {span: TCol, offset: number};
export interface IColProps extends FCChildrenProps, RecordOption<NoXsMediaSize, TCol|TColOffset>{
    col?: TCol|TColOffset;
}


/** -------------------------------
 *         CSS Grid - Grid
 * ------------------------------ */
export type TGridColSizeUnit = 'px' | '%' | 'em' | 'fr' | 'rem';
export type TGridColNumberSizeUnit = 'auto'|`${number}${TGridColSizeUnit}`;

export type TGridCol = string|number|TGridColNumberSizeUnit|'min-content'|'max-content'|`minmax('${TGridColNumberSizeUnit}', '${TGridColNumberSizeUnit}')`;
export type TGridCols = TGridCol|RecordOption<TMediaSize, TGridCol>

export type TGridGapUnit = 'px' | 'rem';
export type TGridGap = 0|`${number}${TGridGapUnit}`
export type TGridGaps = TGridGap|RecordOption<TMediaSize, TGridGap>

export interface IGridProps extends FCChildrenProps, RecordOption<NoXsMediaSize, TGridCol>{
    col?: TGridCol
}


/** -------------------------------
 *       CSS Grid - Grid Col
 * ------------------------------ */
export type TSpan = TGridCol|RecordOption<TMediaSize, TGridCol>;

export interface IGridColProps extends FCChildrenProps{
    col?: TSpan
    row?: TSpan
}



/** -------------------------------
 *       CSS Grid - Flex
 * ------------------------------ */
export type TFlexDirection = 'column'|'row';

export type TDirection = TFlexDirection|RecordOption<TMediaSize, TFlexDirection>;

export interface IFlexProps extends FCChildrenProps{
    direction?: TDirection

    gap?: TGridGaps
    columnGap?: TGridGap
    rowGap?: TGridGap
}

