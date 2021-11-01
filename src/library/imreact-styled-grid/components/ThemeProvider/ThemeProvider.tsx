import React from 'react';
import {ThemeProvider} from 'styled-components/macro';
import {defaultTheme} from '../../config';
import {themeProps} from './types';

const GridThemeProvider = (props: themeProps) => {
    const {gridTheme = {}, children} = props;

    const composeGridTheme = {imreactStyledGrid: Object.assign({}, defaultTheme, gridTheme)};

    return <ThemeProvider theme={composeGridTheme}>{children}</ThemeProvider>;
};

export default GridThemeProvider;
