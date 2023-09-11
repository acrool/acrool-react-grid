import React from 'react';
import styled, {css} from 'styled-components';
import media from '../../media';
import {FCChildrenProps, TStyledProps} from '../../types';
import {mediaSizes, themeName} from '../../config';



export interface IProps extends FCChildrenProps{
    noGutters?: boolean;
    vertical?: 'top'|'center'|'bottom';
    horizontal?: 'left'|'center'|'right';
}


/**
 * 產生 RWD 樣式
 * @param props
 */
const generateRWDStyled = (props: TStyledProps<IProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            --bs-gutter-x: ${props.theme[themeName]?.gridGutterWidthMedia[sizeName]};
            --bs-gutter-y: 0;
        `;
        });
};


/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const Row = styled.div.attrs((props: TStyledProps<IProps>) => ({
    'data-row': props.noGutters ? 'no-gutter': '',
    'data-horizontal': props.horizontal ? props.horizontal: undefined,
    'data-vertical': props.vertical ? props.vertical: undefined,
}))`
  ${(props: TStyledProps<IProps>) => css`
     ${!props.noGutters && css`
       ${generateRWDStyled(props)}
     `}
 `}
`;

export default Row;

