import {TStyledProps, IContainerProps, TRWDMaxSize, NoXsMediaSize} from '../../types';
import {noXsMediaSizes, themeName} from '../../config';
import media from '../../media';
import {cssGetter} from '../Col/utils';
import {css} from 'styled-components';




/**
 * 產生 RWD Gutter 樣式
 * @param props
 */
export const createBreakpoint = (props: TStyledProps<IContainerProps>) => {
    let prevSize: 'col'|NoXsMediaSize = 'col';
    const maxSizeConfig = getRWDMaxSize(props);

    return noXsMediaSizes.reduce((curr, sizeName) => {

        const baseConfig = css`
            --bear-gutter-x: ${props.theme[themeName]?.gutter};
            max-width: ${maxSizeConfig[sizeName] ? 'none': `${props.theme[themeName]?.containerMaxWidths[sizeName]}px`};
        `;

        if(typeof props[sizeName] !== 'undefined' && props[sizeName] !== props[prevSize]){
            prevSize = sizeName;
            return curr.concat(media[sizeName]`
                ${baseConfig}
                ${cssGetter.col(props[sizeName], props.theme[themeName]?.gridColumns)};
            `);
        }
        return curr.concat(media[sizeName]`
            ${baseConfig}
        `);
    }, []);
};


/**
 * 產生 RWD MaxSize 樣式
 * @param props
 */
export const getRWDMaxSize = (props: TStyledProps<IContainerProps>): TRWDMaxSize => {
    // 需要一個表來表示開關，不填寫預設為 true

    const config= noXsMediaSizes.reduce((curr, sizeName, index) => {
        // 如果沒有設定 就是看上一個
        const isUndefined = typeof props[sizeName] === 'undefined';
        if(isUndefined){
            return [
                ...curr,
                {sizeName, isFluid: curr[index].isFluid},
            ];
        }

        return [
            ...curr,
            {sizeName, isFluid: props[sizeName] === true},
        ];

    }, [{sizeName: 'fluid', isFluid: props.fluid}]);

    return config.reduce((curr, row) => ({
        ...curr,
        [row.sizeName]: row.isFluid,
    }), {}) as TRWDMaxSize;


};
