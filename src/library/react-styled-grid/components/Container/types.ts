import CSS from 'csstype';


export interface ContainerProps {
    fluid?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: CSS.Properties;
}

export type FluidCss = {
    fluid: any;
};
