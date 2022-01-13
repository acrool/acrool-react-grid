import {ColCss} from './types';

const css: ColCss = {
    col: (column: any, gridColumns: number) => {
        let colFlexBasis = 0;

        switch (column) {
        case true:
            return `
          -ms-flex-preferred-size: 0;
          -ms-flex-positive: 1;
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        `;
        case 'auto':
            return `
          -ms-flex: 0 0 auto;
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        `;
        default:
            colFlexBasis = (100 / gridColumns) * column;
            return `
            -ms-flex: 0 0 ${colFlexBasis}%;
            flex: 0 0 ${colFlexBasis}%;
            max-width: ${colFlexBasis}%;
        `;
        }
    },
};

export default css;
