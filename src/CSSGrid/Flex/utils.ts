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
}

export const cssGetter: ICSSGetter = {
    direction: (direction) => {
        return `flex-direction: ${direction};`;
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

            return media[sizeName]`

            ${typeof mediaColSpanProps !== 'undefined' && css`
                ${cssGetter.direction(mediaColSpanProps)};
            `}
    `;
        });
};

