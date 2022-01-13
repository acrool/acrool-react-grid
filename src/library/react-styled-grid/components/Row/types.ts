import CSS from 'csstype';

export interface RowProps {
    noGutters?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: CSS.Properties;
    forwardAs?: 'div'|'section'|'ul'|'li'|'a'|'p';
    forwardRef?: any;
    id?: string;
    key?: string| number;
    onClick?: Function;
}
