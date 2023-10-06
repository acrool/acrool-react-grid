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
export type TRWDMaxSize = {
    [size in NoXsMediaSize | 'fluid']: boolean
}

export interface IContainerProps extends FCChildrenProps, RecordOption<NoXsMediaSize, boolean>{
    fluid?: boolean;
}


/** -------------------------------
 *       Grid System - Row
 * ------------------------------ */
export interface IRowProps extends FCChildrenProps{}


/** -------------------------------
 *       Grid System - Col
 * ------------------------------ */
export type TCol = number | true | 'auto' | undefined;
export interface IColProps extends FCChildrenProps, RecordOption<NoXsMediaSize, TCol>{
    col?: TCol;
}


/** -------------------------------
 *         CSS Grid - Grid
 * ------------------------------ */
export type TGridColSizeUnit = 'px' | '%' | 'em' | 'fr' | 'rem';
export type TGridColNumberSizeUnit = 'auto'|`${number}${TGridColSizeUnit}`;

export type TGridCol = string|number|TGridColNumberSizeUnit|'min-content'|'max-content'|`minmax('${TGridColNumberSizeUnit}', '${TGridColNumberSizeUnit}')`;
export type TGridTemplate = TGridCol|RecordOption<TMediaSize, TGridCol>

export type TGridGapUnit = 'px' | 'rem';
export type TGridGap = 0|`${number}${TGridGapUnit}`
export type TGridGaps = TGridGap|RecordOption<TMediaSize, TGridGap>

export interface IGridProps extends FCChildrenProps{
    gap?: TGridGaps
    columnGap?: TGridGap
    rowGap?: TGridGap

    columns?: TGridTemplate;
    rows?: TGridTemplate;
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

