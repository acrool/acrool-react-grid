import {TStyledProps, IContainerProps} from '../../types';
import {mediaSizes, themeName} from '../../config';
import media from '../../media';
import {css} from 'styled-components';

/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IContainerProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            --bear-gutter-x: ${props.theme[themeName]?.gutter};

            max-width: ${props[sizeName] ? 'none': `${props.theme[themeName]?.containerMaxWidths[sizeName]}px`};

        `;
        });
};
