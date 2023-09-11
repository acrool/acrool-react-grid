import React, {PropsWithChildren} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

import {defaultGridTheme, themeName} from '../../config';
import {IGridSetting} from '../../types';
import '../../styles.css';


interface IProps {
    gridTheme: Partial<IGridSetting>
    children: React.ReactNode
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

    [data-container]{
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        box-sizing: border-box;
        padding-right: var(--bear-gutter-x);
        padding-left: var(--bear-gutter-x);
    }

    [data-row]{
        --bear-gutter-x: 1.5rem;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(-1 * var(--bear-gutter-y));
        margin-right: calc(-.5 * var(--bear-gutter-x));
        margin-left: calc(-.5 * var(--bear-gutter-x));
        padding-inline-start: 0; /* 避免 ul 預設樣式位移 */
    }
    [data-row="no-gutters"]{
        --bear-gutter-x: 0;
    }
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
    [data-row] > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bear-gutter-x) * .5);
        padding-left: calc(var(--bear-gutter-x) * .5);
        margin-top: var(--bear-gutter-y);
    }
`;
