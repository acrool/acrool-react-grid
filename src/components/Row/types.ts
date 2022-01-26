import CSS from 'csstype';

export enum EAlign{
    start='flex-start',
    center='center',
    end='flex-end',
}


export interface IRowProps {
    noGutters?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: CSS.Properties;
    forwardAs?: 'div'|'section'|'ul'|'li'|'a'|'p';
    forwardRef?: any;
    id?: string;
    key?: string| number;
    onClick?: Function;

    vertical?: EAlign;
    horizontal?: EAlign;

}
