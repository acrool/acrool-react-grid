import {TStyledProps, IGridColProps, TGridCol, TSpan} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetter {
    col: (column: TGridCol) => string
    colSpan: (column: TSpan) => string
    rowSpan: (column: TSpan) => string
}

export const cssGetter: ICSSGetter = {
    col: (col) => {
        return `grid-column: auto/span ${col};`;
    },
    colSpan: (colSpan) => {
        return `
            grid-column-start: span ${colSpan};
        `;
    },
    rowSpan: (rowSpan) => {
        return `
            grid-row-start: span ${rowSpan};
        `;
    }
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IGridColProps>) => {
    return noXsMediaSizes
        .map(sizeName => {
            const mediaColSpanProps = typeof props.colSpans === 'object' ? props.colSpans[sizeName]: undefined;
            const mediaRowSpanProps = typeof props.rowSpans === 'object' ? props.rowSpans[sizeName]: undefined;

            const mediaArg = props[sizeName];
            return media[sizeName]`
            ${typeof mediaArg !== 'undefined' && css`
                ${cssGetter.col(mediaArg)};
            `}

            ${typeof mediaColSpanProps !== 'undefined' && css`
                ${cssGetter.colSpan(mediaColSpanProps)};
            `}
            ${typeof mediaRowSpanProps !== 'undefined' && css`
                ${cssGetter.rowSpan(mediaRowSpanProps)};
            `}
    `;
        });
};
