import {CSSObject, ThemeProps} from 'styled-components/macro';

export type TStrings = TemplateStringsArray | CSSObject

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
export type NoXsMediaSize = Exclude<EMediaSize, EMediaSize.xs>
export type TContainerMaxWidths = Omit<IBreakpoints, EMediaSize.xs>
export type TGridGutterWidthMedia = Omit<IBreakpoints, EMediaSize.xs>

export type TMedia = Omit<
    {
        [size in EMediaSize]: Function
    },
    EMediaSize.xs
    > & { px2vw: Function }


export type TThemeProps = ThemeProps<{styledGrid: IGridSetting}>;
export type TStyledProps<P> = TThemeProps & P;


export interface IGridSetting {
    gridGutterWidth: number
    gridColumns: number
    gridBreakpoints: IBreakpoints
    containerMaxWidths: TContainerMaxWidths
    gridGutterWidthMedia: Partial<TGridGutterWidthMedia>
}
