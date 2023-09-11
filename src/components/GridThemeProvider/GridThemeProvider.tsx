import React, {PropsWithChildren} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

import {defaultGridTheme, themeName} from '../../config';
import {IGridSetting} from '../../types';


interface IProps {
    gridTheme: Partial<IGridSetting>;
    children: React.ReactNode;
}

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
const GridThemeProvider = (props: IProps) => {
    const {gridTheme, children} = props;
    const {gridBreakpoints, containerMaxWidths, gridGutterWidthMedia, ...baseDefaultTheme} = defaultGridTheme;

    // console.log('test render bear-react-grid version 10');
    const composeGridTheme = {
        [themeName]: {
            ...baseDefaultTheme,
            ...gridTheme,
            gridBreakpoints: Object.assign({}, gridBreakpoints, gridTheme?.gridBreakpoints),
            containerMaxWidths: Object.assign({}, containerMaxWidths, gridTheme?.containerMaxWidths),
            gridGutterWidthMedia: Object.assign({}, gridGutterWidthMedia, gridTheme?.gridGutterWidthMedia),
        }
    };

    return <ThemeProviderFixed theme={composeGridTheme}>
        {children}
        <GlobalStyled/>
    </ThemeProviderFixed>;
};

export default GridThemeProvider;


const GlobalStyled = createGlobalStyle`
    
`;
