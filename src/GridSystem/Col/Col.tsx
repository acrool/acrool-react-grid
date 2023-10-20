import React from 'react';
import styled, {css} from 'styled-components';
import {themeName} from '../../config';

import {TStyledProps, IColProps} from '../../types';

import {generateRWDStyled, cssGetter} from './utils';



/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    } if (value === 'auto') {
        return '-auto';
    }
    return '';
};



/**
 * 產生 Debug 資訊
 * @param props
 */
const generateDebugData = (props: TStyledProps<IColProps>) => {
    return [
        props.col && `col${suffix(props.col)}`,
        props.sm && `col-sm${suffix(props.sm)}`,
        props.md && `col-md${suffix(props.md)}`,
        props.lg && `col-lg${suffix(props.lg)}`,
        props.xl && `col-xl${suffix(props.xl)}`,
        props.xxl && `col-xxl${suffix(props.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};




/**
 * Col Component
 * breakpoints sort: sm => xl
 *
 * qa: min-height=1px
 * https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/
 *
 */
const Col = styled.div.attrs((props: TStyledProps<IColProps>) => ({
    'data-grid': generateDebugData(props),
}))`
  //box-sizing: border-box;
  //min-height: 1px;
  //min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版

  ${(props: TStyledProps<IColProps>) => css`
     ${props.col && cssGetter.col(props.col, props.theme[themeName]?.gridColumns)};
     ${generateRWDStyled(props)};
 `}
`;

export default Col;
