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
// export interface IGutterWidths {
//     xs: TGutterWidth
//     sm: TGutterWidth
//     md: TGutterWidth
//     lg: TGutterWidth
//     xl: TGutterWidth
//     xxl: TGutterWidth
// }
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
export interface IContainerProps extends FCChildrenProps{
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
export interface IGridColProps extends FCChildrenProps{
    col?: TGridCol;
    sm?: TGridCol;
    md?: TGridCol;
    lg?: TGridCol;
    xl?: TGridCol;
    xxl?: TGridCol;

    colSpan?: number,
    rowSpan?: number,
}
