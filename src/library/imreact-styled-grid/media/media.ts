import {css, FlattenSimpleInterpolation} from 'styled-components/macro';
import {themeName, defaultTheme} from '../config';

const getBreakpoints = (props: any) => {
  const theme = props.theme.imreactStyledGrid;
  const gridBreakPoints = Object.assign({}, theme?.gridBreakpoints);
  return {
    ...defaultTheme.gridBreakpoints,
    ...gridBreakPoints,
  };
}

const media: any = Object.keys(defaultTheme.gridBreakpoints).reduce(
    (accumulator, label) => {
        const minMedia = (strings: any, ...interpolations: any) => css`
              @media (min-width: ${(props: any) => getBreakpoints(props)[label]}px) {
                ${css(strings, ...interpolations)};
              }
        `;
        // @ts-ignore
        accumulator[label] = minMedia;
        return accumulator;
    },
    {},
);

function px2vw(pixels: number, pixelTotal: number = 320) {
    return `${(pixels / pixelTotal) * 100}vw`;
}

const replacePx2Vw = (css: FlattenSimpleInterpolation) => {
    let re = /(\d+)+(px)/gi;

    return css.map(styleObj =>{
        if(typeof styleObj === 'string'){
            return styleObj.replace(re, (match, offset, string) => {
                const px = Number(offset);
                if(px === 0){
                    return '0';
                }else if(!isNaN(px)){
                    return px2vw(px);
                }
                return match;
            });
        }
        return styleObj;
    });
};

media.px2vw = (strings: any, ...interpolations: any) => css`
      @media (max-width: ${(props: any) => getBreakpoints(props).sm}px) {
          ${replacePx2Vw(css(strings, ...interpolations))};
      }
`;

export default media;
