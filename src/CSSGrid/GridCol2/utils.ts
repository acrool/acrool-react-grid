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

