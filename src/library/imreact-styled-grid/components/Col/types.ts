import {MouseEvent} from 'react';

export type Column = number | true | 'auto';

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
