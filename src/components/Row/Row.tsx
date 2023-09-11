import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IRowProps} from '../../types';
import {generateRWDStyled} from './utils';




/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const Row = styled.div.attrs((props: TStyledProps<IRowProps>) => ({
    'data-row': props.noGutters ? 'no-gutters': '',
    'data-horizontal': props.horizontal ? props.horizontal: undefined,
    'data-vertical': props.vertical ? props.vertical: undefined,
}))`
  ${(props: TStyledProps<IRowProps>) => css`
     ${!props.noGutters && css`
       ${generateRWDStyled(props)}
     `}
 `}
`;

export default Row;

