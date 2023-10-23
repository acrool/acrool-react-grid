import {TStyledProps, IColProps, NoXsMediaSize, IGridRowProps, TGridCol} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {fr, repeat} from '../../utils';




interface ICSSGetter {
    col: (column: TGridCol) => string
}

export const cssGetter: ICSSGetter = {
    col: (column) => {
        if(typeof column === 'number'){
            return `
                grid-template-columns: ${fr(column)};
            `;
        }

        return `
            grid-template-columns: ${column};
        `;
    },
};



/**
 * Create Breakpoint
 */
export const createBreakpoint = (props: TStyledProps<IGridRowProps>) => {
    let prevSize: 'col'|NoXsMediaSize = 'col';
    return noXsMediaSizes.reduce((curr, sizeName) => {
        const args = props[sizeName];
        if(typeof args !== 'undefined' && props[sizeName] !== props[prevSize]){
            prevSize = sizeName;
            return curr.concat(media[sizeName]`
                ${cssGetter.col(args)};
            `);
        }
        return curr;
    }, []);

};



/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    } if (value === 'auto') {
        return '-auto';
    }
    return '';
};



/**
 * 產生 Debug 資訊
 * @param props
 */
export const createInfo = (props: TStyledProps<IColProps>) => {
    return [
        props.col && `col${suffix(props.col)}`,
        props.sm && `col-sm${suffix(props.sm)}`,
        props.md && `col-md${suffix(props.md)}`,
        props.lg && `col-lg${suffix(props.lg)}`,
        props.xl && `col-xl${suffix(props.xl)}`,
        props.xxl && `col-xxl${suffix(props.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};



