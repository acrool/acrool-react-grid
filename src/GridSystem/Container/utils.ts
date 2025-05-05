import {noXsMediaSizes, themeName} from '../../config';
import media from '../../media';
import {IContainerProps, NoXsMediaSize,TStyledProps} from '../../types';




/**
 * 產生 RWD Gutter 樣式
 * @param props
 */
export const createBreakpoint = (props: TStyledProps<IContainerProps>) => {
    const maxSizeConfig = getRWDMaxSize(props);
    return noXsMediaSizes.reduce((curr, sizeName) => {
        if(maxSizeConfig[sizeName]){
            return curr.concat(media[sizeName]`
                max-width: var(--acrool-container-max-width-${sizeName}, ${props.theme[themeName]?.containerMaxWidths[sizeName]}px);
            `);
        }
        return curr;
    }, []);
};


type TFluidConfig = Record<NoXsMediaSize, Record<NoXsMediaSize, boolean>>

/**
 * 產生 RWD MaxSize 樣式
 * @param props
 */
export const getRWDMaxSize = (props: TStyledProps<IContainerProps>) => {
    const fluidConfig: TFluidConfig = {
        sm: {sm: true, md: true, lg: true, xl: true, xxl: true},
        md: {sm: false, md: true, lg: true, xl: true, xxl: true},
        lg: {sm: false, md: false, lg: true, xl: true, xxl: true},
        xl: {sm: false, md: false, lg: false, xl: true, xxl: true},
        xxl: {sm: false, md: false, lg: false, xl: false, xxl: true},
    };

    if(typeof props.fluid !== 'undefined' && props.fluid !== false){
        if(props.fluid === true){
            return {sm: false, md: false, lg: false, xl: false, xxl: false};
        }
        return fluidConfig[props.fluid];
    }
    return {sm: true, md: true, lg: true, xl: true, xxl: true};
};





/**
 * 判斷是否為空
 * @param value
 */
const suffixCol = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    }
    if (value === 'auto') {
        return '-auto';
    }
    return '';
};

/**
 * 判斷是否為空
 * @param value
 */
const suffixContainer = (value: any) => {
    if (typeof value !== 'boolean') {
        return `-${value}`;
    }
    if(value){
        return '-fluid';
    }
    return '';
};

/**
 * 產生 Debug 資訊
 * @param props
 */
export const createInfo = (props: IContainerProps) => {
    return [
        props.fluid ? `container${suffixContainer(props.fluid)}`: 'container',
    ]
        .filter(Boolean)
        .join(' ');
};
