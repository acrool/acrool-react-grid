import React, {MouseEvent, ReactNode} from 'react';
import CSS from 'csstype';
import type {CSSObject} from 'styled-components';
import {themeName} from './config';

export type RecordOption<K extends keyof any, T> = {
    [P in K]?: T;
};

export interface CommonProps {
    style?: CSS.Properties,
    className?: string,
    forwardAs?: 'div'|'section'|'ul'|'li'|'a'|'p'|'span';
    forwardRef?: any;
    id?: string|number;
    key?: string|number;
    children?: ReactNode,
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface ThemeProps<T> {
    theme: T;
}

export type TThemeProps = ThemeProps<{[themeName]: IGridSetting}>;
export type TStyledProps<P> = P & ThemeProps<{[themeName]: IGridSetting}>;

export type TStrings = TemplateStringsArray | CSSObject;

export type TMediaSize = 'xs'|'sm'|'md'|'lg'|'xl'|'xxl';
export type NoXsMediaSize = Exclude<TMediaSize, 'xs'>;

export type TMedia = Omit<{ [size in TMediaSize]: Function }, 'xs'> & { px2vw: Function };

export type TGutterWidth = string;

export interface IBreakpoints {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
    xxl: number,
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
    fluid?: TContainerFluid;
}

export interface IRowProps extends CommonProps {
}

export type TCol = number | true | 'auto' | undefined;
export type TColOffset = {
    span?: TCol,
    offset?: number,
};

export interface IColProps extends CommonProps, RecordOption<NoXsMediaSize, TCol|TColOffset>{
    col?: TCol|TColOffset;
}

export type TGridColSizeUnit = 'px' | '%' | 'em' | 'fr' | 'rem';
export type TGridColNumberSizeUnit = 'auto'|`${number}${TGridColSizeUnit}`;

export type TGridCol = string|number|TGridColNumberSizeUnit|'min-content'|'max-content'|`minmax('${TGridColNumberSizeUnit}', '${TGridColNumberSizeUnit}')`;

export interface IGridProps extends CommonProps, RecordOption<NoXsMediaSize, TGridCol>{
    col?: TGridCol;
    gap?: number;
}

export interface IFlexProps extends CommonProps {
    column?: boolean
}

export interface FCProps {
    id?: string
    style?: CSS.Properties
    className?: string
}

export interface FCChildrenProps extends FCProps {
    children?: ReactNode
}
