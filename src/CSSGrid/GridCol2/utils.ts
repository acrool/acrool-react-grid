import {
    TStyledProps,
    IGridProps,
    TGridGap,
    TGridTemplate,
    TGridGaps,
    TGridCol,
    TSpan,
    IGridColProps
} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {css} from 'styled-components';





interface ICSSGetter {
    col: (column: TGridCol) => string
    colSpans: (span: TSpan) => string
    rowSpans: (span: TSpan) => string
}

export const cssGetter: ICSSGetter = {
    col: (col) => {
        return `grid-column: auto/span ${col};`;
    },
    colSpans: (colSpan) => {
        return `
            grid-column-start: span ${colSpan};
        `;
    },
    rowSpans: (rowSpan) => {
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
                ${cssGetter.colSpans(mediaColSpanProps)};
            `}
            ${typeof mediaRowSpanProps !== 'undefined' && css`
                ${cssGetter.rowSpans(mediaRowSpanProps)};
            `}
    `;
        });
};

