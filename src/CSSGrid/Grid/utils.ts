import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {IColProps, IGridProps,NoXsMediaSize, TGridCol, TStyledProps} from '../../types';
import {fr} from '../../utils';




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
export const createBreakpoint = (props: TStyledProps<IGridProps>) => {
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
    if (typeof value === 'number') {
        return `-${value}`;
    }
    if (typeof value === 'string') {
        return `-[${value}]`;
    }
    return '';
};



/**
 * 產生 Debug 資訊
 * @param props
 */
export const createInfo = (props: IGridProps) => {
    return [
        props.col && `grid${suffix(props.col)}`,
        props.sm && `grid-sm${suffix(props.sm)}`,
        props.md && `grid-md${suffix(props.md)}`,
        props.lg && `grid-lg${suffix(props.lg)}`,
        props.xl && `grid-xl${suffix(props.xl)}`,
        props.xxl && `grid-xxl${suffix(props.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};



