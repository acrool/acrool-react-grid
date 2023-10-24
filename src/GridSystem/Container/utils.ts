import {TStyledProps, IContainerProps, NoXsMediaSize} from '../../types';
import {noXsMediaSizes, themeName} from '../../config';
import media from '../../media';




/**
 * 產生 RWD Gutter 樣式
 * @param props
 */
export const createBreakpoint = (props: TStyledProps<IContainerProps>) => {
    const maxSizeConfig = getRWDMaxSize(props);

    return noXsMediaSizes.reduce((curr, sizeName) => {
        let maxWidth = '';
        if(maxSizeConfig[sizeName]){
            maxWidth = `
                max-width: ${props.theme[themeName]?.containerMaxWidths[sizeName]}px;
            `;
        }
        return curr.concat(media[sizeName]`
            ${maxWidth}
        `);
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

    if(typeof props.fluid !== 'undefined'){
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
    if (!!Number(value)) {
        return `-${value}`;
    }
    return '';
};

/**
 * 產生 Debug 資訊
 * @param props
 */
export const createInfo = (props: TStyledProps<IContainerProps>) => {
    return [
        'container',
        props.fluid && `container-fluid${suffixContainer(props.fluid)}`,
    ]
        .filter(Boolean)
        .join(' ');
};
