import React from 'react';
import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {cssGetter, createBreakpoint, createInfo} from './utils';
import {TStyledProps, IColProps} from '../../types';



/**
 * Col Component
 * breakpoints sort: sm => xl
 *
 * qa: min-height=1px
 * https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/
 *
 */
const Col = styled.div.attrs((props: TStyledProps<IColProps>) => ({
    'data-grid': createInfo(props),
}))`
  //box-sizing: border-box;
  //min-height: 1px;
  //min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版

  ${(props: TStyledProps<IColProps>) => css`
     ${props.col && cssGetter.col(props.col, props.theme[themeName]?.gridColumns)};

     ${createBreakpoint(props)};
 `}
`;

export default Col;
