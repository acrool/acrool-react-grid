import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IGridProps} from '../../types';
import {themeName} from '../../config';
import {createBreakpoint, cssGetter, createInfo} from './utils';




/**
 * Grid Component
 * 由外部設定柵欄顯示
 */
const Grid = styled.div.attrs((props: TStyledProps<IGridProps>) => ({
    'data-grid': createInfo(props),
}))`
    --bear-gutter-x: ${props => props.theme[themeName]?.gutter};
    --bear-gutter-y: 0;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(${props => props.theme[themeName]?.gridColumns}, 1fr);
    column-gap: var(--bear-gutter-x);
    row-gap: var(--bear-gutter-y);


    ${(props: TStyledProps<IGridProps>) => css`
     ${props.col && cssGetter.col(props.col)};

     ${createBreakpoint(props)};
   `}

`;

export default Grid;

