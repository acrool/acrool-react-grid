import {TStyledProps, IColProps} from '../../types';
import {mediaSizes, themeName} from '../../config';
import media from '../../media';
import {css} from 'styled-components';
import getCss from './css';

/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IColProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            ${typeof props[sizeName] !== 'undefined' && css`
                ${getCss.col(props[sizeName], props.theme[themeName]?.gridColumns)};
            `}
    `;
        });
};
