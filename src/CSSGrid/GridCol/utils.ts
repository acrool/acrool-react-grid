import {TStyledProps, IColProps, IGridColProps, TCol, TGridCol} from '../../types';
import {mediaSizes, themeName} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetter {
    col: (column: TGridCol) => string
    start: (column: TGridCol) => string
}

export const cssGetter: ICSSGetter = {
    col: (column) => {
        return `grid-column: auto/span ${column};`;
    },
    start: (column) => {
        return `
            grid-column-start: ${column};
        `;
    }
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IGridColProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            ${typeof props[sizeName] !== 'undefined' && css`
                ${cssGetter.col(props[sizeName])};
            `}
    `;
        });
};
