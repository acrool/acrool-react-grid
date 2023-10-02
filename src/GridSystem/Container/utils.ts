import {TStyledProps, IContainerProps, TRWDMaxSize} from '../../types';
import {noXsMediaSizes, themeName} from '../../config';
import media from '../../media';




/**
 * 產生 RWD Gutter 樣式
 * @param props
 */
export const generateRWDStyle = (props: TStyledProps<IContainerProps>) => {
    const maxSizeConfig = getRWDMaxSize(props);
    return noXsMediaSizes
        .map(sizeName => {
            return media[sizeName]`
            --bear-gutter-x: ${props.theme[themeName]?.gutter};
            max-width: ${maxSizeConfig[sizeName] ? 'none': `${props.theme[themeName]?.containerMaxWidths[sizeName]}px`};
        `;
        });
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
