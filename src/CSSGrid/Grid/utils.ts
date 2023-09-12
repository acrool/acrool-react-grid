import {TStyledProps, TCol, IGridProps, TGridGap, TGridCol} from '../../types';
import {mediaSizes, themeName} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetterCss {
    col: (column: TCol) => string
    row: (column: TCol) => string
    gap: (gapNum: TGridGap) => string
    columnGap: (gapNum: TGridCol) => string
    rowGap: (gapNum: TGridCol) => string
}

export const cssGetter: ICSSGetterCss = {
    col: (column) => {
        return `--bear-columns: ${column};`;
    },
    row: (column) => {
        return `--bear-rows: ${column};`;
    },
    gap: (gapNum) => {
        return `--bear-gap: ${gapNum};`;
    },
    columnGap: (gapNum) => {
        return `column-gap: ${gapNum};`;
    },
    rowGap: (gapNum) => {
        return `row-gap: ${gapNum};`;
    },
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IGridProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            ${typeof props[sizeName] !== 'undefined' && css`
                ${cssGetter.col(props[sizeName])};
            `}
        `;
        });
};

