import React from 'react';
import {ThemeProvider} from 'styled-components/macro';

import {defaultGridTheme} from '../../config';
import {IGridSetting} from '../../typings';


interface IProps {
    gridTheme: Partial<IGridSetting>;
    children: React.ReactNode;
}

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

    console.log('react-styled-grid version 8');
    const composeGridTheme = {
        styledGrid: {
            ...baseDefaultTheme,
            ...gridTheme,
            gridBreakpoints: Object.assign({}, gridBreakpoints, gridTheme?.gridBreakpoints),
            containerMaxWidths: Object.assign({}, containerMaxWidths, gridTheme?.containerMaxWidths),
            gridGutterWidthMedia: Object.assign({}, gridGutterWidthMedia, gridTheme?.gridGutterWidthMedia),
        }
    };

    return <ThemeProvider theme={composeGridTheme}>{children}</ThemeProvider>;
};

export default GridThemeProvider;
