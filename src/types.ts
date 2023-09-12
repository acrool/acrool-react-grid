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
export interface IGutterBreakpoints {
    xs: TGutterWidth
    sm: TGutterWidth
    md: TGutterWidth
    lg: TGutterWidth
    xl: TGutterWidth
    xxl: TGutterWidth
}
export type TContainerMaxWidths = Omit<IBreakpoints, 'xs'>
export type TGridGutterWidthMedia = Omit<IGutterBreakpoints, 'xs'>

export type TMedia = Omit<{ [size in TMediaSize]: Function }, 'xs'> & { px2vw: Function }

export interface ITheme {
    gridGutterWidth: TGutterWidth
    gridColumns: number
    gridBreakpoints: IBreakpoints
    containerMaxWidths: TContainerMaxWidths
    gridGutterWidthMedia: TGridGutterWidthMedia
}



/** -------------------------------
 *         GirdProvide
 * ------------------------------ */
export interface IGridThemeProviderProps {
    gridTheme: Partial<IGridSetting>
    children: React.ReactNode
}

export interface IGridSetting {
    gridGutterWidth: TGutterWidth
    gridColumns: number
    gridBreakpoints: IBreakpoints
    containerMaxWidths: TContainerMaxWidths
    gridGutterWidthMedia: Partial<TGridGutterWidthMedia>
}
export type TGridTheme = Partial<IGridSetting>;



/** -------------------------------
 *             Container
 * ------------------------------ */
export interface IContainerProps extends FCChildrenProps{
    fluid?: boolean;
}


/** -------------------------------
 *       Grid System - Row
 * ------------------------------ */
export interface IRowProps extends FCChildrenProps{
    noGutters?: boolean
    vertical?: TRowVertical
    horizontal?: TRowHorizontal
}

export type TFlexDirection = 'column'|'row';
export type TRowVertical = 'top'|'center'|'bottom';
export type TRowHorizontal = 'left'|'center'|'right';


/** -------------------------------
 *       Grid System - Col
 * ------------------------------ */
export type TCol = number | true | 'auto' | undefined;
export interface IColProps extends FCChildrenProps{
    col?: TCol;
    sm?: TCol;
    md?: TCol;
    lg?: TCol;
    xl?: TCol;
    xxl?: TCol;
}


/** -------------------------------
 *         CSS Grid - Grid
 * ------------------------------ */
export type TGridColSizeUnit = 'px' | '%' | 'em' | 'fr' | 'rem';

export type TGridCol = true|'auto'|string|number|`${number}${TGridColSizeUnit}`|'min-content'|'max-content'|`minmax('${number}${TGridColSizeUnit}', '${number}${TGridColSizeUnit}')`;
export type TGridTemplate = TGridCol|RecordOption<TMediaSize, TGridCol>

export type TGridGapUnit = 'px' | 'rem';
export type TGridGap = `${number}${TGridGapUnit}`
export type TGridGaps = TGridGap|string

export interface IGridProps extends FCChildrenProps{
    gap?: TGridGaps
    columnsGap?: TGridGap
    rowsGap?: TGridGap
    vertical?: TRowVertical
    horizontal?: TRowHorizontal

    columns?: TGridTemplate;
    rows?: TGridTemplate;
}

/** -------------------------------
 *       CSS Grid - Grid Col
 * ------------------------------ */
export interface IGridColProps extends FCChildrenProps{
    col?: TGridCol;
    sm?: TGridCol;
    md?: TGridCol;
    lg?: TGridCol;
    xl?: TGridCol;
    xxl?: TGridCol;
}
