import {TStyledProps, IGridProps, TGridGap, TGridTemplate, TGridGaps} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetterCss {
    columns: (columns: TGridTemplate) => string
    rows: (rows: TGridTemplate) => string
    gap: (gapNum: TGridGaps) => string
    columnGap: (gapNum: TGridGap) => string
    rowGap: (gapNum: TGridGap) => string
}


export const cssGetter: ICSSGetterCss = {
    columns: (columns) => {

        if(typeof columns === 'string'){
            return `
            grid-template-columns: ${columns};
            `;
        }
        return `
            grid-template-columns: repeat(${columns}, auto)
        `;
    },
    rows: (rows) => {
        if(typeof rows === 'string'){
            return `
            grid-template-rows: ${rows};
            `;
        }
        return `
            grid-template-rows: ${rows === 1 ? '1fr' : `repeat(${rows}, 1fr)`}
        `;
    },
    gap: (gapNum) => {
        return `
        gap: ${gapNum};
        `;
    },
    columnGap: (gapNum) => {
        return `
        column-gap: ${gapNum};
        `;
    },
    rowGap: (gapNum) => {
        return `
        row-gap: ${gapNum};
        `;
    },
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IGridProps>) => {
    return noXsMediaSizes
        .map(sizeName => {
            const mediaColumnProps = typeof props.columns === 'object' ? props.columns[sizeName]: undefined;
            const mediaRowProps = typeof props.rows === 'object' ? props.rows[sizeName]: undefined;
            return media[sizeName]`
            ${typeof mediaColumnProps !== 'undefined' && css`
                ${cssGetter.columns(mediaColumnProps)};
            `}
            ${typeof mediaRowProps !== 'undefined' && css`
                ${cssGetter.rows(mediaRowProps)};
            `}
        `;
        });
};

