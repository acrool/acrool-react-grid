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
        --bear-spacer: 1rem;
        --bear-spacer-1: calc(1rem * .25);
        --bear-spacer-2: calc(1rem * .5);
        --bear-spacer-3: calc(1rem);
        --bear-spacer-4: calc(1rem * 1.5);
        --bear-spacer-5: calc(1rem * 3);
    }

    ${(props: TStyledProps<TThemeProps>) => css`
        ${generateRWDStyled(props)}
    `}

    [data-row][data-horizontal="left"]{
        justify-content: flex-start;
    }
    [data-row][data-horizontal="center"]{
        justify-content: center;
    }
    [data-row][data-horizontal="right"]{
        justify-content: flex-end;
    }
    [data-row][data-vertical="top"]{
        justify-content: flex-start;
    }
    [data-row][data-vertical="center"]{
        justify-content: center;
    }
    [data-row][data-vertical="bottom"]{
        justify-content: flex-end;
    }
`;
