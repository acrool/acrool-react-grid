import React from 'react';
import {StyledComponentBase} from 'styled-components/macro';
import { ITheme } from '../../media';

export type TGridStyledComponent = String & StyledComponentBase<'div', any, { 'data-grid': string; 'data-debug': string | undefined; }, 'data-grid' | 'data-debug'>;

export type gridProps = {
    gridGutterWidth?: number;
    gridColumns?: number;
    gridBreakpoints?: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    containerMaxWidths?: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
};

export type themeProps = {
    gridTheme: ITheme;
    children: React.ReactNode;
};
