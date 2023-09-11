import {CSSObject} from 'styled-components';

export type TStrings = TemplateStringsArray | CSSObject
export type sizeUnit = 'px' | 'rem';
export type TGutterWidth = `${number}${sizeUnit}`;

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

export type TMedia = Omit<
  {
    [size in EMediaSize]: Function
  },
  EMediaSize.xs
> & { px2vw: Function }

export interface ITheme {
  gridGutterWidth: TGutterWidth
  gridColumns: number
  gridBreakpoints: IBreakpoints
  containerMaxWidths: TContainerMaxWidths
  gridGutterWidthMedia: TGridGutterWidthMedia
}
