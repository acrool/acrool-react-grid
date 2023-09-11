import {EColType, TColumn} from './types';

type ColCss = {
    col: (column: TColumn, gridColumns: number) => string
};

const css: ColCss = {
    col: (column, gridColumns) => {
        let colFlexBasis = 0;

        switch (column) {
        case true:
            return `
          flex: 1 0 0%;
        `;
        case EColType.auto:
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

export default css;
