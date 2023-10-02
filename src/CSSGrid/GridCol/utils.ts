import {TStyledProps, IGridColProps, TGridCol} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetter {
    col: (column: TGridCol) => string
    colSpan: (column: TGridCol) => string
    rowSpan: (column: TGridCol) => string
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
            const mediaArg = props[sizeName];
            return media[sizeName]`
            ${typeof mediaArg !== 'undefined' && css`
                ${cssGetter.col(mediaArg)};
            `}
    `;
        });
};
