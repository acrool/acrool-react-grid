import {FluidCss} from './types';

const css: FluidCss = {
    fluid: (column: any, maxWidth: number|'none', gridGutterWidth: number) => {

        switch (column) {
        case true:
            return `
          max-width: none;
          padding-left: 0;
          padding-right: 0;
        `;
        default:
            return `
          max-width: ${maxWidth === 'none' ? 'none': `${maxWidth}px`};
          padding-left: ${gridGutterWidth}px;
          padding-right: ${gridGutterWidth}px;
        `;
        }
    },
};

export default css;
