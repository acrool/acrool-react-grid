import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IGridProps} from '../../types';
import {themeName} from '../../config';
import {createBreakpoint, cssGetter, createInfo} from './utils';




/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const Grid = styled.div.attrs((props: TStyledProps<IGridProps>) => ({
    'data-grid': createInfo(props),
}))`
    --bear-gutter-x: ${props => props.theme[themeName]?.gutter};
    --bear-gutter-y: 0;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(12, 1fr);
    column-gap: var(--bear-gutter-x);
    row-gap: var(--bear-gutter-y);


    ${(props: TStyledProps<IGridProps>) => css`
     ${props.col && cssGetter.col(props.col)};

     ${createBreakpoint(props)};
   `}

`;

export default Grid;

