import {TStyledProps, IColProps, TCol} from '../../types';
import {noXsMediaSizes, themeName} from '../../config';
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
          flex: 1 0 0;
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
            flex: 0 0 auto;
            width: ${colFlexBasis > 0 ? `${colFlexBasis}%`: 0};
        `;
        }
    },
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IColProps>) => {
    return noXsMediaSizes
        .filter(sizeName => typeof props[sizeName] !== 'undefined')
        .map(sizeName => {
            return media[sizeName]`
                ${cssGetter.col(props[sizeName], props.theme[themeName]?.gridColumns)};
        `;
        });
};
