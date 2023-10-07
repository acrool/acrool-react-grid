import {TStyledProps, IGridProps, TGridGap, TGridTemplate, TGridGaps} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {css} from 'styled-components';
import {repeat} from '../../utils';




interface ICSSGetterCss {
    columns: (columns: TGridTemplate) => string
    rows: (rows: TGridTemplate) => string
    gap: (gapNum: TGridGap) => string
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
        if(typeof columns === 'number'){
            return `
                grid-template-columns: ${columns === 1 ? 'auto' : repeat(columns, 'auto')}
            `;
        }

        return '';
    },
    rows: (rows) => {
        if(typeof rows === 'string'){
            return `
            grid-template-rows: ${rows};
            `;
        }
        if(typeof rows === 'number'){
            return `
                grid-template-rows: ${rows === 1 ? 'auto' : repeat(rows, 'auto')}
            `;
        }
        return '';

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

            const mediaGapProps = typeof props.gap === 'object' ? props.gap[sizeName]: undefined;
            const mediaColumnGapProps = typeof props.columnGap === 'object' ? props.columnGap[sizeName]: undefined;
            const mediaRowGapProps = typeof props.rowGap === 'object' ? props.rowGap[sizeName]: undefined;

            return media[sizeName]`
            ${typeof mediaColumnProps !== 'undefined' && css`
                ${cssGetter.columns(mediaColumnProps)};
            `}
            ${typeof mediaRowProps !== 'undefined' && css`
                ${cssGetter.rows(mediaRowProps)};
            `}


            ${typeof mediaGapProps !== 'undefined' && css`
                ${cssGetter.gap(mediaGapProps)};
            `}
            ${typeof mediaColumnGapProps !== 'undefined' && css`
                ${cssGetter.columnGap(mediaColumnGapProps)};
            `}
            ${typeof mediaRowGapProps !== 'undefined' && css`
                ${cssGetter.rowGap(mediaRowGapProps)};
            `}
        `;
        });
};

