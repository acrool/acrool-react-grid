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
export type sizeUnit = 'px' | 'rem';
export type TGutterWidth = number|`${number}${sizeUnit}`;

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
 *             GirdProvide
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
 *             Row
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
 *             Col
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
