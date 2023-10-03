import {
    TStyledProps,
    IGridProps,
    TGridGap,
    TGridTemplate,
    TGridGaps,
    TGridCol,
    TSpan,
    IGridColProps, TFlexDirection, IFlexProps, TDirection
} from '../../types';
import {noXsMediaSizes} from '../../config';
import media from '../../media';
import {css} from 'styled-components';





interface ICSSGetter {
    direction: (direction: TDirection) => string

    gap: (gapNum: TGridGap) => string
    columnGap: (gapNum: TGridGap) => string
    rowGap: (gapNum: TGridGap) => string
}

export const cssGetter: ICSSGetter = {
    direction: (direction) => {
        return `flex-direction: ${direction};`;
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
export const generateRWDStyled = (props: TStyledProps<IFlexProps>) => {
    return noXsMediaSizes
        .map(sizeName => {
            const mediaColSpanProps = typeof props.direction === 'object' ? props.direction[sizeName]: undefined;
            const mediaGapProps = typeof props.gap === 'object' ? props.gap[sizeName]: undefined;
            const mediaColumnGapProps = typeof props.columnsGap === 'object' ? props.columnsGap[sizeName]: undefined;
            const mediaRowGapProps = typeof props.rowsGap === 'object' ? props.rowsGap[sizeName]: undefined;

            return media[sizeName]`

            ${typeof mediaColSpanProps !== 'undefined' && css`
                ${cssGetter.direction(mediaColSpanProps)};
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

