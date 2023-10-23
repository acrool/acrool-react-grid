import React, {PropsWithChildren} from 'react';
import {ThemeProvider, StyleSheetManager} from 'styled-components';

import {defaultGridTheme, themeName} from '../config';
import {IGridThemeProviderProps} from '../types';
import {Utilities} from './Utilities';



const ThemeProviderFixed = ThemeProvider as unknown as React.FC<PropsWithChildren<{ theme: any }>>;


/**
 * Grid Theme Provider
 * use :
 *     <GridThemeProvider gridTheme={{
 *         gutter: 5,
 *     }}>
 *          <Container>, <Row>, <Col> ...then eat this setting
 *     </GridThemeProvider>
 */
const GridThemeProvider = (props: IGridThemeProviderProps) => {
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

    return <StyleSheetManager disableVendorPrefixes>
        <ThemeProviderFixed theme={composeGridTheme}>
            {children}
            <Utilities/>
        </ThemeProviderFixed>
    </StyleSheetManager>
    ;
};

export default GridThemeProvider;
