/**
 * bootstrap grid setting
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
 *     gridGutterWidth: 3,
 * }}>
 */
import {ITheme} from './media';
import {NoXsMediaSize} from './types';

const themeName = 'bearReactGrid';
const defaultGridTheme: ITheme = {
    gridGutterWidth: '0.625rem',
    gridColumns: 24,
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
    gridGutterWidthMedia: {
        sm: '0.625rem',
        md: '0.625rem',
        lg: '0.625rem',
        xl: '0.625rem',
        xxl: '0.625rem',
    }
};
const mediaSizes = Object.keys(defaultGridTheme.containerMaxWidths) as NoXsMediaSize[];



export {themeName, defaultGridTheme, mediaSizes};
