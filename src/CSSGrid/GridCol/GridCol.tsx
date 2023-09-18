'use client';

import React from 'react';
import styled, {css} from 'styled-components';

import {TStyledProps, IGridColProps} from '../../types';

import {cssGetter, generateRWDStyled} from './utils';



/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    }
    return '';
};



/**
 * 產生 Debug 資訊
 * @param props
 */
const generateDebugData = (props: TStyledProps<IGridColProps>) => {
    return [
        props.col && `g-col${suffix(props.col)}`,
        props.sm && `g-col-sm${suffix(props.sm)}`,
        props.md && `g-col-md${suffix(props.md)}`,
        props.lg && `g-col-lg${suffix(props.lg)}`,
        props.xl && `g-col-xl${suffix(props.xl)}`,
        props.xxl && `g-col-xxl${suffix(props.xxl)}`,
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
const GridCol = styled.div.attrs((props: TStyledProps<IGridColProps>) => ({
    'data-g-col': generateDebugData(props),
}))`
  ${(props: TStyledProps<IGridColProps>) => css`
     ${props.col && cssGetter.col(props.col)};
     ${generateRWDStyled(props)};
 `}
`;

export default GridCol;
