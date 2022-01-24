import React from 'react';
import {ThemeProvider} from 'styled-components/macro';
import defaultTheme from '../../config';
import {themeProps} from './types';

const GridThemeProvider = (props: themeProps) => {
    const {gridTheme, children} = props;
    const {gridBreakpoints, containerMaxWidths, gridGutterWidthMedia, ...baseDefaultTheme} = defaultTheme;

    const composeGridTheme = {
        // styledGrid: Object.assign({}, defaultTheme, gridTheme)
        styledGrid: {
            ...baseDefaultTheme,
            ...gridTheme,
            gridBreakpoints: {...gridBreakpoints, ...gridTheme?.gridBreakpoints ?? {}},
            containerMaxWidths: {...containerMaxWidths, ...gridTheme?.containerMaxWidths ?? {}},
            gridGutterWidthMedia: {...gridGutterWidthMedia, ...gridTheme?.gridGutterWidthMedia ?? {}},
        }
    };

    return <ThemeProvider theme={composeGridTheme}>{children}</ThemeProvider>;
};

export default GridThemeProvider;
