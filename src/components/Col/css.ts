import {ColCss, EColType} from './types';

const css: ColCss = {
    col: (column: any, gridColumns: number) => {
        let colFlexBasis = 0;

        switch (column) {
        case true:
            return `
          display: block;
          -ms-flex-preferred-size: 0;
          -ms-flex-positive: 1;
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        `;
        case EColType.auto:
            return `
          display: block;
          -ms-flex: 0 0 auto;
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
            colFlexBasis = (100 / gridColumns) * column;
            return `
            display: block;
            -ms-flex: 0 0 ${colFlexBasis}%;
            flex: 0 0 ${colFlexBasis}%;
            max-width: ${colFlexBasis}%;
        `;
        }
    },
};

export default css;
