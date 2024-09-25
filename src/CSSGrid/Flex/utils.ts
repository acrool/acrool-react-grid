import {TStyledProps, IFlexProps} from '../../types';


/**
 * Create Breakpoint
 */
export const createCol = () => {
    return 'flex-direction: column;';
};


/**
 * 產生 Debug 資訊
 * @param props
 */
export const createInfo = (props: TStyledProps<IFlexProps>) => {
    return props.column ? 'flex-column': undefined;
};

