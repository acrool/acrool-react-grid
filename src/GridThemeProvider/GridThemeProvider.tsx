import React, {PropsWithChildren} from 'react';
import {ThemeProvider, createGlobalStyle, css} from 'styled-components';

import {defaultGridTheme, themeName} from '../config';
import {TStyledProps, TThemeProps, IGridThemeProviderProps} from '../types';
import {generateRWDStyled} from './utils';
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
    :root{
        --bear-spacer: ${props => props.theme.bearReactGrid.spacer};
        --bear-spacer-1: calc(var(--bear-spacer) * .25);
        --bear-spacer-2: calc(var(--bear-spacer) * .5);
        --bear-spacer-3: var(--bear-spacer);
        --bear-spacer-4: calc(var(--bear-spacer) * 1.5);
        --bear-spacer-5: calc(var(--bear-spacer) * 3);

        --bear-gutter ${props => props.theme.bearReactGrid.gridGutterWidth};
        --bear-gutter-1: calc(var(--bear-gutter) * .25);
        --bear-gutter-2: calc(var(--bear-gutter) * .5);
        --bear-gutter-3: var(--bear-gutter);
        --bear-gutter-4: calc(var(--bear-gutter) * 1.5);
        --bear-gutter-5: calc(var(--bear-gutter) * 3);
    }

    ${(props: TStyledProps<TThemeProps>) => css`
        ${generateRWDStyled(props)}
    `}

    // 水平
    [data-row][data-horizontal="left"], [data-grid][data-vertical="bottom"]{justify-content: flex-start;}
    [data-row][data-horizontal="center"], [data-grid][data-vertical="center"]{justify-content: center;}
    [data-row][data-horizontal="right"], [data-grid][data-vertical="right"]{justify-content: flex-end;}
    // 垂直
    [data-row][data-vertical="top"], [data-grid][data-vertical="top"]{align-items: flex-start;}
    [data-row][data-vertical="center"], [data-grid][data-vertical="center"]{align-items: center;}
    [data-row][data-vertical="bottom"], [data-grid][data-vertical="bottom"]{align-items: flex-end;}
`;
