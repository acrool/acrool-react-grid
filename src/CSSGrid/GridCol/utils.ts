import {TStyledProps, TSpan, IGridColProps} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {css} from 'styled-components';
import {getDefaultSizeValue} from '../../utils';





interface ICSSGetter {
    col: (span: TSpan) => string
    row: (span: TSpan) => string
}

export const cssGetter: ICSSGetter = {
    col: (colSpan) => {
        return `grid-column: auto/span ${colSpan};`;
    },
    row: (rowSpan) => {
        return `grid-row: auto/span ${rowSpan};`;
    },
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IGridColProps>) => {
    return noXsMediaSizes
        .map(sizeName => {
            const mediaColSpanProps = typeof props.col === 'object' ? props.col[sizeName]: undefined;
            const mediaRowSpanProps = typeof props.row === 'object' ? props.row[sizeName]: undefined;

            return media[sizeName]`

            ${typeof mediaColSpanProps !== 'undefined' && css`
                ${cssGetter.col(mediaColSpanProps)};
            `}
            ${typeof mediaRowSpanProps !== 'undefined' && css`
                ${cssGetter.row(mediaRowSpanProps)};
            `}
    `;
        });
};





/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    }
    if (typeof value === 'string'){
        return `-[${value}]`;
    }
    return '';
};

/**
 * 產生 Debug 資訊
 * @param props
 */

/**
 * 產生 Debug 資訊
 * @param props
 */
export const createInfo = (props: TStyledProps<IGridColProps>) => {
    return [
        !!getDefaultSizeValue(props.col) && `g-col${suffix(getDefaultSizeValue(props.col))}`,
        typeof props.col === 'object' && ('sm' in props.col) && `g-col-sm${suffix(props.col.sm)}`,
        typeof props.col === 'object' && ('md' in props.col) && `g-col-md${suffix(props.col.md)}`,
        typeof props.col === 'object' && ('lg' in props.col) && `g-col-lg${suffix(props.col.lg)}`,
        typeof props.col === 'object' && ('xl' in props.col) && `g-col-xl${suffix(props.col.xl)}`,
        typeof props.col === 'object' && ('xxl' in props.col) && `g-col-xxl${suffix(props.col.xxl)}`,
        !!getDefaultSizeValue(props.row) && `g-row${suffix(getDefaultSizeValue(props.row))}`,
        typeof props.row === 'object' && ('sm' in props.row) && `g-row-sm${suffix(props.row.sm)}`,
        typeof props.row === 'object' && ('md' in props.row) && `g-row-md${suffix(props.row.md)}`,
        typeof props.row === 'object' && ('lg' in props.row) && `g-row-lg${suffix(props.row.lg)}`,
        typeof props.row === 'object' && ('xl' in props.row) && `g-row-xl${suffix(props.row.xl)}`,
        typeof props.row === 'object' && ('xxl' in props.row) && `g-row-xxl${suffix(props.row.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};

