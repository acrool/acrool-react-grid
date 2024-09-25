import React from 'react';
import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {createBreakpoint, createInfo, createCol} from './utils';
import {TStyledProps, IColProps} from '../../types';


// about `min-height=1px`
// https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/

/**
 * Col Component
 *
 * Columns are incredibly flexible. There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.
 *
 * By [Layout Grid System Col](https://acrool-react-grid.pages.dev/docs/layout/grid-system/col)
 */
const Col = styled.div.attrs((props: TStyledProps<IColProps>) => ({
    'data-grid': createInfo(props),
}))`
  min-height: 1px;
  min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版

  ${(props: TStyledProps<IColProps>) => css`
     ${props.col && createCol(props.col, props.theme[themeName]?.gridColumns)};

     ${createBreakpoint(props)};
 `}
`;

export default Col;
