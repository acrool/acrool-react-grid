import {TStyledProps, IColProps, TCol, NoXsMediaSize} from '../../types';
import {noXsMediaSizes, themeName} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetter {
    col: (column: TCol, gridColumns: number) => string
}

export const cssGetter: ICSSGetter = {
    col: (column, gridColumns) => {
        let colFlexBasis = 0;

        switch (column) {
        case true:
            return `
          flex: 1 0 0;
        `;
        case 'auto':
            return `
          flex: 0 0 auto;
          width: auto;
        `;
        default:
            const columnNumber = (typeof column === 'number' ? column : 0);
            colFlexBasis = (100 / gridColumns) * columnNumber;
            return `
            flex: 0 0 auto;
            width: ${colFlexBasis > 0 ? `${colFlexBasis}%`: 0};
        `;
        }
    },
};



/**
 * Create Breakpoint
 */
export const createBreakpoint = (props: TStyledProps<IColProps>) => {
    let prevSize: 'col'|NoXsMediaSize = 'col';
    return noXsMediaSizes.reduce((curr, sizeName) => {
        if(typeof props[sizeName] !== 'undefined' && props[sizeName] !== props[prevSize]){
            prevSize = sizeName;
            return curr.concat(media[sizeName]`
                ${cssGetter.col(props[sizeName], props.theme[themeName]?.gridColumns)};
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



