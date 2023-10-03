import React, {MouseEvent, ReactNode} from 'react';
import CSS from 'csstype';
import {ThemeProps, CSSObject} from 'styled-components';
import {themeName} from './config';

type RecordOption<K extends keyof any, T> = {
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
    gridTheme: Partial<IGridSetting>
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
type TContainerFluidSize = {
    [T in NoXsMediaSize]?: boolean
}

export type TRWDMaxSize = {
    [size in NoXsMediaSize | 'fluid']: boolean
}

export interface IContainerProps extends FCChildrenProps, TContainerFluidSize{
    fluid?: boolean;
}

/** -------------------------------
 *       Grid System - Row
 * ------------------------------ */
export interface IRowProps extends FCChildrenProps{}

export type TFlexDirection = 'column'|'row';


/** -------------------------------
 *       Grid System - Col
 * ------------------------------ */
export type TCol = number | true | 'auto' | undefined;

type TColSize = {
    [T in NoXsMediaSize]?: TCol
}

export interface IColProps extends FCChildrenProps, TColSize{
    col?: TCol;
}


/** -------------------------------
 *         CSS Grid - Grid
 * ------------------------------ */
export type TGridColSizeUnit = 'px' | '%' | 'em' | 'fr' | 'rem';
export type TGridColNumberSizeUnit = `${number}${TGridColSizeUnit}`;

export type TGridCol = 'auto'|string|number|TGridColNumberSizeUnit|'min-content'|'max-content'|`minmax('${TGridColNumberSizeUnit}', '${TGridColNumberSizeUnit}')`;
export type TGridTemplate = TGridCol|RecordOption<TMediaSize, TGridCol>

export type TGridGapUnit = 'px' | 'rem';
export type TGridGap = `${number}${TGridGapUnit}`
export type TGridGaps = TGridGap|string

export interface IGridProps extends FCChildrenProps{
    gap?: TGridGaps
    columnsGap?: TGridGap
    rowsGap?: TGridGap

    columns?: TGridTemplate;
    rows?: TGridTemplate;
}

/** -------------------------------
 *       CSS Grid - Grid Col
 * ------------------------------ */
type TGridColSize = {
    [T in NoXsMediaSize]?: TGridCol
}

type TGridSpan = {
    [T in TMediaSize]?: number
}
export type TSpan = number|TGridSpan;

export interface IGridColProps extends TGridColSize{
    col?: TGridCol
    colSpans?: TSpan
    rowSpans?: TSpan
    spanRow?: TSpan
}

