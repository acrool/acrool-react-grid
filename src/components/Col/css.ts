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
          display: block;
          flex-basis: 0;
          flex-grow: 1;
        `;
        case EColType.auto:
            return `
          display: block;
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        `;
        case EColType.hidden:
            return `
          display: none;
        `;
        case EColType.visible:
            return `
          display: block;
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
