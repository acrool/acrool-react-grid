import React from 'react';
import styled, {css} from 'styled-components';

import {TStyledProps, IGridColProps, IGridProps, TSpan} from '../../types';

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
 * 取得預設的尺寸(最小的)
 * @param column
 */
const getDefaultSizeValue = (column?: TSpan) => {
    if((typeof column === 'object' && 'xs' in column)){
        return column.xs;
    }
    return column; // or undefined
};




/**
 * Grid Col Component
 */
const GridCol = styled.div.attrs((props: TStyledProps<IGridColProps>) => ({
    'data-g-col': generateDebugData(props),
}))`
    ${(props: TStyledProps<IGridColProps>) => {
        const defaultColSpanArg = getDefaultSizeValue(props.colSpans);
        const defaultRowSpanArg = getDefaultSizeValue(props.rowSpans);

        return css`
            ${props.col && cssGetter.col(props.col)};

            // 最小尺寸
            ${defaultColSpanArg && cssGetter.colSpan(defaultColSpanArg)};
            ${defaultRowSpanArg && cssGetter.rowSpan(defaultRowSpanArg)};

            ${generateRWDStyled(props)};
      `;
    }}
`;

export default GridCol;
