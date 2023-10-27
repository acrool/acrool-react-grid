import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IRowProps} from '../../types';
import {themeName} from '../../config';


// - align-items 若預設加上 flex-start, 會讓鄰居Col高度不會一致
// - 設定會 width 100% 會產生 margin 抵銷失敗
// - padding-inline-start 避免 ul 預設樣式位移

/**
 * Row Component
 *
 * Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to uniformly apply column sizing and gutter classes to change the spacing of your content.
 *
 * By [Layout Grid System Row](https://bear-react-grid.pages.dev/docs/layout/grid-system/row)
 */
const Row = styled.div.attrs((props: TStyledProps<IRowProps>) => ({
    'data-grid': 'row',
}))`
    --bear-gutter-x: ${props => props.theme[themeName]?.gutter};
    --bear-gutter-y: 0;

    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bear-gutter-y) * -1);
    margin-right: calc(var(--bear-gutter-x) * -0.5);
    margin-left: calc(var(--bear-gutter-x) * -0.5);
    padding-inline-start: 0; /* 避免 ul 預設樣式位移 */

    > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bear-gutter-x) * 0.5);
        padding-left: calc(var(--bear-gutter-x) * 0.5);
        margin-top: var(--bear-gutter-y);
    }

`;

export default Row;

