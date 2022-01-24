import {MouseEvent} from 'react';
import {StyledComponentBase} from 'styled-components/macro';

export enum EColType {
    auto= 'auto',
    visible= 'visible',
    hidden= 'hidden',
}
export type Column = number | true | EColType;

export interface ColProps {
    col?: Column;
    sm?: Column;
    md?: Column;
    lg?: Column;
    xl?: Column;
    xxl?: Column;
    children?: React.ReactNode;
    className?: string;
    style?: any;
    forwardAs?: 'div'|'section'|'ul'|'li'|'a'|'p';
    forwardRef?: any;
    id?: string;
    key?: string| number;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}


export type ColCss = {
    col: any;
};
export type TCol = String & StyledComponentBase<'div', any, { 'data-grid': string; 'data-debug': string | undefined; }, 'data-grid' | 'data-debug'>;
