import React, {Children} from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, TGridTemplate, IGridColProps, TSpan} from '../../types';
import {cssGetter, generateRWDStyled} from './utils';




/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    }
    if (typeof value === 'string'){
        return `-[${value}]`;
    }
    return '';
};

/**
 * 產生 Debug 資訊
 * @param props
 */

/**
 * 產生 Debug 資訊
 * @param props
 */
const generateDebugData = (props: TStyledProps<any>) => {
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
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const GridCol2 = styled.div.attrs((props: TStyledProps<IGridColProps>) => ({
    'data-grid': generateDebugData(props),
}))`
    ${(props: TStyledProps<IGridColProps>) => {
        const defaultColSpanArg = getDefaultSizeValue(props.colSpans);
        const defaultRowSpanArg = getDefaultSizeValue(props.rowSpans);

        return css`
            ${props.col && cssGetter.col(props.col)};

            // 最小尺寸
            ${defaultColSpanArg && cssGetter.colSpans(defaultColSpanArg)};
            ${defaultRowSpanArg && cssGetter.rowSpans(defaultRowSpanArg)};

            ${generateRWDStyled(props)};
        `;
    }}
`;

export default GridCol2;

