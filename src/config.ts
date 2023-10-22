/**
 * Bootstrap grid setting
 *
 * 單位值參考
 * row.padding === col.padding === container.padding
 *
 * 更改格數
 * import grid from "config/grid";
 *
 * <GridThemeProvider gridTheme={{
 *     ...grid,
 *     gridColumns: 35,
 *     gutter: 3,
 * }}>
 */
import {NoXsMediaSize, IGridSetting, TMediaSize} from './types';

const themeName = 'bearReactGrid';
const defaultGridTheme: IGridSetting = {
    spacer: '1rem',
    gutter: '1.5rem',
    gridColumns: 12,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1540,
    },
};
const noXsMediaSizes = Object.keys(defaultGridTheme.containerMaxWidths) as NoXsMediaSize[];
const mediaSizes = Object.keys(defaultGridTheme.gridBreakpoints) as TMediaSize[];



export {themeName, defaultGridTheme, noXsMediaSizes, mediaSizes};
