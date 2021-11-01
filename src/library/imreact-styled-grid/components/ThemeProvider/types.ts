import React from 'react';

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
    gridTheme: gridProps;
    children: React.ReactNode;
};
