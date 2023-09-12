import React, {MouseEvent, ReactNode} from 'react';
import CSS from 'csstype';
import {ThemeProps, CSSObject} from 'styled-components';
import {themeName} from './config';


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


export type NoXsMediaSize = Exclude<EMediaSize, EMediaSize.xs>

export type TThemeProps = ThemeProps<{[themeName]: IGridSetting}>;
export type TStyledProps<P> = TThemeProps & P;





/** -------------------------------
 *             Media
 * ------------------------------ */


export type TStrings = TemplateStringsArray | CSSObject
export type TMediaSizeUnit = 'px' | 'rem';
export type TGutterWidth = `${number}${TMediaSizeUnit}`;

export enum EMediaSize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
    xxl = 'xxl'
}

export interface IBreakpoints {
    [EMediaSize.xs]: number
    [EMediaSize.sm]: number
    [EMediaSize.md]: number
    [EMediaSize.lg]: number
    [EMediaSize.xl]: number
    [EMediaSize.xxl]: number
}
export interface IGutterBreakpoints {
    [EMediaSize.xs]: TGutterWidth
    [EMediaSize.sm]: TGutterWidth
    [EMediaSize.md]: TGutterWidth
    [EMediaSize.lg]: TGutterWidth
    [EMediaSize.xl]: TGutterWidth
    [EMediaSize.xxl]: TGutterWidth
}
export type TContainerMaxWidths = Omit<IBreakpoints, EMediaSize.xs>
export type TGridGutterWidthMedia = Omit<IGutterBreakpoints, EMediaSize.xs>

export type TMedia = Omit<{ [size in EMediaSize]: Function }, EMediaSize.xs> & { px2vw: Function }

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
export type TGridCol = true|'auto'|number|`${number}${TGridColSizeUnit}`|'min-content'|'max-content'|`minmax('${number}${TGridColSizeUnit}', '${number}${TGridColSizeUnit}')`;
export type TGridGap = TGridCol|`${TGridCol} ${TGridCol}`

export interface IGridProps extends FCChildrenProps{
    gap?: TGridGap
    columnGap?: TGridCol
    rowGap?: TGridCol
    vertical?: TRowVertical
    horizontal?: TRowHorizontal

    col?: TCol;
    colSm?: TCol;
    colMd?: TCol;
    colLg?: TCol;
    colXl?: TCol;
    colXXl?: TCol;

    row?: TCol;
    rowSm?: TCol;
    rowMd?: TCol;
    rowLg?: TCol;
    rowXl?: TCol;
    rowXXl?: TCol;
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
