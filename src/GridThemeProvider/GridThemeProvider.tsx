import React, {PropsWithChildren} from 'react';
import {ThemeProvider, createGlobalStyle, css} from 'styled-components';

import {defaultGridTheme, themeName} from '../config';
import {TStyledProps, TThemeProps, IGridThemeProviderProps} from '../types';
import {generateRWDStyled, calcUnitSize} from './utils';
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
        <GlobalStyled/>
    </ThemeProviderFixed>;
};

export default GridThemeProvider;


const GlobalStyled = createGlobalStyle`

    ${(props: TStyledProps<TThemeProps>) => css`
        :root{
            --bear-spacer-1: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .25)};
            --bear-spacer-2: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .5)};
            --bear-spacer-3: ${props.theme.bearReactGrid.spacer};
            --bear-spacer-4: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 1.5)};
            --bear-spacer-5: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 3)};

            --bear-gutter-1: ${calcUnitSize(props.theme.bearReactGrid.gridGutterWidth, num => num * .25)};
            --bear-gutter-2: ${calcUnitSize(props.theme.bearReactGrid.gridGutterWidth, num => num * .5)};
            --bear-gutter-3: ${props.theme.bearReactGrid.gridGutterWidth};
            --bear-gutter-4: ${calcUnitSize(props.theme.bearReactGrid.gridGutterWidth, num => num * 1.5)};
            --bear-gutter-5: ${calcUnitSize(props.theme.bearReactGrid.gridGutterWidth, num => num * 3)};
        }

        ${generateRWDStyled(props)}
    `}

`;
