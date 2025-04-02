import {css, Interpolation, CSSObject} from 'styled-components';
import {themeName} from '../config';

import {TMediaSize, TMedia, TStrings} from '../types';





/**
 * 計算 PX 轉 VW
 * @param pixels
 * @param pixelTotal
 */
function px2vwCalc(pixels: number, pixelTotal: number = 320) {
    return `${(pixels / pixelTotal) * 100}vw`;
}

/**
 * 尋找PX取代為VW
 * @param css
 */
const replacePx2Vw = (css: Interpolation<object>[]) => {
    let re = /(\d+)+(px)/gi;

    return css.map((styleObj) => {
        if(typeof styleObj === 'string'){
            return styleObj.replace(re, (match, offset, string) => {
                const px = Number(offset);
                if(px === 0){
                    return '0';
                }else if(!isNaN(px)){
                    return px2vwCalc(px);
                }
                return match;
            });
        }
        return styleObj;
    });
};


/**
 * 產生 px轉vw 的方法
 * use:
 *   ${media.px2vw`
 *      width: 20px
 *   `}
 */
const mediaPx2vw = (strings: TemplateStringsArray | CSSObject, ...interpolations: Interpolation<object>[]) => css`
  @media (max-width: ${(props: any) => props.theme[themeName]?.gridBreakpoints.sm}px) {
      ${replacePx2Vw(css(strings, ...interpolations))};
  }
`;

/**
 * 產生 Media 的方法
 * use:
 *   ${media.sm`
 *      width: 20px
 *   `}
 * @param size
 */
const mediaSize = (size: TMediaSize) => {
    return (strings: TStrings, ...interpolations: Interpolation<object>[]) => css`
          @media (min-width: ${(props: any) => props.theme[themeName]?.gridBreakpoints[size]}px) {
            ${css(strings, ...interpolations)};
          };
    `;
};

const media: TMedia = {
    px2vw: mediaPx2vw,
    sm: mediaSize('sm'),
    md: mediaSize('md'),
    lg: mediaSize('lg'),
    xl: mediaSize('xl'),
    xxl: mediaSize('xxl'),
};



export default media;
