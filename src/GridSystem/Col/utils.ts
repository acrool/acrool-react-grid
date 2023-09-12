import {TStyledProps, IColProps, TCol} from '../../types';
import {mediaSizes, themeName} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetter {
    col: (column: TCol, gridColumns: number) => string
}

export const cssGetter: ICSSGetter = {
    col: (column, gridColumns) => {
        let colFlexBasis = 0;

        switch (column) {
        case true:
            return `
          flex: 1 0 0%;
        `;
        case 'auto':
            return `
          flex: 0 0 auto;
          width: auto;
        `;
        default:
            const columnNumber = (typeof column === 'number' ? column : 0);
            colFlexBasis = (100 / gridColumns) * columnNumber;
            return `
            flex: 0 0 ${colFlexBasis}%;
            width: ${colFlexBasis}%;
        `;
        }
    },
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IColProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            ${typeof props[sizeName] !== 'undefined' && css`
                ${cssGetter.col(props[sizeName], props.theme[themeName]?.gridColumns)};
            `}
    `;
        });
};
