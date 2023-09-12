import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IRowProps} from '../../types';
import {generateRWDStyled} from './utils';
import {themeName} from '../../config';




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
    --bear-gutter-x: ${props => props.theme[themeName]?.gridGutterWidth};
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bear-gutter-y));
    margin-right: calc(-.5 * var(--bear-gutter-x));
    margin-left: calc(-.5 * var(--bear-gutter-x));
    padding-inline-start: 0; /* 避免 ul 預設樣式位移 */

    > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bear-gutter-x) * .5);
        padding-left: calc(var(--bear-gutter-x) * .5);
        margin-top: var(--bear-gutter-y);
    }

  ${(props: TStyledProps<IRowProps>) => css`
     ${props.noGutters ? css`
         --bear-gutter-x: 0;
     `:
        css`
       ${generateRWDStyled(props)}
     `}
 `}
`;

export default Row;

