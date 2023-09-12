import {TStyledProps, IRowProps} from '../../types';
import {mediaSizes, themeName} from '../../config';
import media from '../../media';

/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IRowProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            --bear-gutter-x: ${props.theme[themeName]?.gridGutterWidthMedia[sizeName]};
            --bear-gutter-y: 0;
        `;
        });
};

