import React, {PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components';

import {defaultGridTheme, themeName} from '../config';
import {IGridThemeProviderProps} from '../types';
import {Utilities} from './Utilities';





/**
 * Grid Theme Provider
 *
 * ```tsx
 *     <GridThemeProvider gridTheme={{
 *         gutter: 5,
 *     }}>
 *          <Container>, <Row>, <Col> ...then eat this setting
 *     </GridThemeProvider>
 *  ```
 *
 * By [Config](https://acrool-react-grid.pages.dev/docs/config)
 */
const GridThemeProvider: React.FC<IGridThemeProviderProps> = (props: IGridThemeProviderProps) => {
    const {gridTheme, children} = props;
    const {gridBreakpoints, containerMaxWidths, ...baseDefaultTheme} = defaultGridTheme;

    const composeGridTheme = {
        [themeName]: {
            ...baseDefaultTheme,
            ...gridTheme,
            gridBreakpoints: Object.assign({}, gridBreakpoints, gridTheme?.gridBreakpoints),
            containerMaxWidths: Object.assign({}, containerMaxWidths, gridTheme?.containerMaxWidths),
        }
    };

    return <ThemeProvider theme={composeGridTheme}>
        {children}
        <Utilities key="gridGlobalStyle"/>
    </ThemeProvider>
    ;
};

export default GridThemeProvider;
