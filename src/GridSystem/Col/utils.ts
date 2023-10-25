import {TStyledProps, IColProps, TCol, TColOffset} from '../../types';
import {noXsMediaSizes, themeName} from '../../config';
import media from '../../media';




interface ICSSGetter {
    span: (column: TCol, gridColumns: number) => string
    offset: (column: number, gridColumns: number) => string
}

const calcCol = (column: TCol, gridColumns: number) => {
    const columnNumber = (typeof column === 'number' ? column : 0);
    const colFlexBasis = (100 / gridColumns) * columnNumber;
    if(colFlexBasis > 0){
        return `${colFlexBasis}%`;
    }
    return 0;
};

export const cssGetter: ICSSGetter = {
    offset: (column, gridColumns) => {
        return `
        margin-left: ${calcCol(column, gridColumns)};
        `;
    },
    span: (column, gridColumns) => {

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
            return `
            flex: 0 0 auto;
            width: ${calcCol(column, gridColumns)};
        `;
        }
    },
};



/**
 * Create Breakpoint
 */
export const createCol = (args: TCol|TColOffset, gridColumns: number) => {

    if(typeof args !== 'undefined'){
        if(typeof args === 'object'){
            return `
                ${'span' in args && cssGetter.span(args.span, gridColumns)};
                ${'offset' in args && cssGetter.offset(args.offset, gridColumns)};
            `;
        }
        return `
            ${cssGetter.span(args, gridColumns)};
        `;
    }
    return undefined;
};



/**
 * Create Breakpoint
 */
export const createBreakpoint = (props: TStyledProps<IColProps>) => {
    return noXsMediaSizes.reduce((curr, sizeName) => {
        const args = props[sizeName];
        const gridColumns = props.theme[themeName]?.gridColumns;

        if(typeof args !== 'undefined'){
            return curr.concat(media[sizeName]`
                ${createCol(args, gridColumns)};
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



