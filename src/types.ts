import CSS from 'csstype';
import React, {
    ReactNode,
    RefObject,
} from 'react';
import type {CSSObject} from 'styled-components';

import {themeName} from './config';

export type RecordOption<K extends keyof any, T> = {
    [P in K]?: T;
};

export interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
    style?: CSS.Properties
    className?: string
    id?: string
    key?: string|number
    forwardAs?: 'div'|'section'|'ul'|'li'|'a'|'p'|'span'
    ref?: RefObject<HTMLDivElement|null>
    children?: ReactNode
}

export interface CommonStdProps extends React.HTMLAttributes<HTMLDivElement> {
    style?: CSS.Properties
    className?: string
    id?: string
    key?: string|number
    ref?: RefObject<HTMLDivElement|null>
    children?: ReactNode
}

export interface ThemeProps<T> {
    theme: T
}

export type TThemeProps = ThemeProps<{[themeName]: IGridSetting}>;
export type TStyledProps<P> = P & ThemeProps<{[themeName]: IGridSetting}>;

export type TStrings = TemplateStringsArray | CSSObject;

export type TMediaSize = 'xs'|'sm'|'md'|'lg'|'xl'|'xxl';
export type TMediaSizeStd = '$xs'|'$sm'|'$md'|'$lg'|'$xl'|'$xxl';
export type NoXsMediaSize = Exclude<TMediaSize, 'xs'>;
export type NoXsMediaSizeStd = Exclude<TMediaSizeStd, '$xs'>;

export type TMedia = Omit<{ [size in TMediaSize]: Function }, 'xs'> & { px2vw: Function };

export type TGutterWidth = string;

export interface IBreakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
}

export type TContainerFluid = boolean|NoXsMediaSize;

export interface IGridThemeProviderProps {
    gridTheme?: Partial<IGridSetting>
    children: React.ReactNode
}

export interface IGridSetting {
    spacer: TGutterWidth
    gridColumns: number
    gridBreakpoints: IBreakpoints
    containerMaxWidths: TContainerMaxWidths
}

export type TGridTheme = Partial<IGridSetting>;

export type TContainerMaxWidths = Omit<IBreakpoints, 'xs'>;

export interface IContainerProps extends CommonProps{
    fluid?: TContainerFluid
}
export interface IContainerStdProps extends CommonStdProps{
    $fluid?: TContainerFluid
}

export interface IRowProps extends CommonProps {
}
export interface IRowStdProps extends CommonStdProps {
}

export type TCol = number | true | 'auto' | undefined;
export type TColOffset = {
    span?: TCol,
    offset?: number,
};

export interface IColStdProps extends CommonStdProps, RecordOption<NoXsMediaSizeStd, TCol|TColOffset>{
    $col?: TCol|TColOffset
}
export interface IColProps extends CommonProps, RecordOption<NoXsMediaSize, TCol|TColOffset>{
    col?: TCol|TColOffset
}

export type TGridColSizeUnit = 'px' | '%' | 'em' | 'fr' | 'rem';
export type TGridColNumberSizeUnit = 'auto'|`${number}${TGridColSizeUnit}`;

export type TGridCol = string|number|TGridColNumberSizeUnit|'min-content'|'max-content'|`minmax('${TGridColNumberSizeUnit}', '${TGridColNumberSizeUnit}')`;

export interface IGridStdProps extends CommonStdProps, RecordOption<NoXsMediaSizeStd, TGridCol>{
    $col?: TGridCol
    $gap?: number
}
export interface IGridProps extends CommonProps, RecordOption<NoXsMediaSize, TGridCol>{
    col?: TGridCol
    gap?: number
}

export interface IFlexStdProps extends CommonStdProps {
    $column?: boolean
}
export interface IFlexProps extends CommonProps {
    column?: boolean
}
