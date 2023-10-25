import {TStyledProps, IFlexProps, TFlexDirection} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';



/**
 * Create Breakpoint
 */
export const createCol = (direction: TFlexDirection) => {
    return `
        flex-direction: ${direction};
    `;
};



/**
 * Create Breakpoint
 */
export const createBreakpoint = (props: TStyledProps<IFlexProps>) => {
    return noXsMediaSizes.reduce((curr, sizeName) => {
        const args = props[sizeName];

        if(typeof args !== 'undefined'){
            return curr.concat(media[sizeName]`
                ${createCol(args)};
            `);
        }
        return curr;
    }, []);
};



/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: TFlexDirection) => {
    if (typeof value !== 'undefined') {
        return `-${value}`;
    }
    return '';
};



/**
 * 產生 Debug 資訊
 * @param props
 */
export const createInfo = (props: TStyledProps<IFlexProps>) => {
    return [
        props.col && `flex${suffix(props.col)}`,
        props.sm && `flex-sm${suffix(props.sm)}`,
        props.md && `flex-md${suffix(props.md)}`,
        props.lg && `flex-lg${suffix(props.lg)}`,
        props.xl && `flex-xl${suffix(props.xl)}`,
        props.xxl && `flex-xxl${suffix(props.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};



