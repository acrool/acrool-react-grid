import {TStyledProps, IContainerProps, TRWDMaxSize, NoXsMediaSize, TContainerFluid} from '../../types';
import {noXsMediaSizes, themeName} from '../../config';
import media from '../../media';
import {cssGetter} from '../Col/utils';
import {css} from 'styled-components';
import {preview} from 'vite';




/**
 * 產生 RWD Gutter 樣式
 * @param props
 */
export const createBreakpoint = (props: TStyledProps<IContainerProps>) => {
    let prevSize: 'col'|NoXsMediaSize = 'col';
    const maxSizeConfig = getRWDMaxSize(props);

    return noXsMediaSizes.reduce((curr, sizeName) => {
        let maxWidth = '';
        if(maxSizeConfig[sizeName]){
            maxWidth = `
                max-width: ${props.theme[themeName]?.containerMaxWidths[sizeName]}px;
            `;
        }

        if(typeof props[sizeName] !== 'undefined' && props[sizeName] !== props[prevSize]){
            prevSize = sizeName;
            return curr.concat(media[sizeName]`
                ${maxWidth}
                ${cssGetter.col(props[sizeName], props.theme[themeName]?.gridColumns)};
            `);
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
        props.col && `col${suffixCol(props.col)}`,
        props.sm && `col-sm${suffixCol(props.sm)}`,
        props.md && `col-md${suffixCol(props.md)}`,
        props.lg && `col-lg${suffixCol(props.lg)}`,
        props.xl && `col-xl${suffixCol(props.xl)}`,
        props.xxl && `col-xxl${suffixCol(props.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};
