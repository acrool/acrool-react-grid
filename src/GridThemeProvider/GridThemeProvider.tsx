import React, {PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components';

import {defaultGridTheme, themeName} from '../config';
import {IGridThemeProviderProps} from '../types';
import {GlobalCSSVar} from './GlobalCSSVar';
import '../styles.css';



const ThemeProviderFixed = ThemeProvider as unknown as React.FC<PropsWithChildren<{ theme: any }>>;


/**
 * Grid Theme Provider
 * use :
 *     <GridThemeProvider gridTheme={{
 *         gridGutterWidth: 5,
 *     }}>
 *          <Container>, <Row>, <Col> ...then eat this setting
 *     </GridThemeProvider>
 */
const GridThemeProvider = (props: IGridThemeProviderProps) => {
    const {gridTheme, children} = props;
    const {gridBreakpoints, containerMaxWidths, ...baseDefaultTheme} = defaultGridTheme;

    // console.log('test render bear-react-grid version 10');
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
        <GlobalCSSVar/>
    </ThemeProviderFixed>;
};

export default GridThemeProvider;
