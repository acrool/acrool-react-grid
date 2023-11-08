import React, {PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components';

import {defaultGridTheme, themeName} from '../config';
import {IGridThemeProviderProps} from '../types';
import {Utilities} from './Utilities';



const ThemeProviderFixed = ThemeProvider as unknown as React.FC<PropsWithChildren<{ theme: any }>>;


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
 * By [Config](https://bear-react-grid.pages.dev/docs/config)
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

    return <ThemeProviderFixed theme={composeGridTheme}>
        {children}
        <Utilities/>
    </ThemeProviderFixed>
    ;
};

export default GridThemeProvider;
