import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, TGridCols, IGridColProps} from '../../types';
import {cssGetter, generateRWDStyled} from './utils';
import {getDefaultSizeValue} from '../../utils';




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
const generateDebugData = (props: TStyledProps<IGridColProps>) => {
    return [
        !!getDefaultSizeValue(props.col) && `g-col${suffix(getDefaultSizeValue(props.col))}`,
        typeof props.col === 'object' && ('sm' in props.col) && `g-col-sm${suffix(props.col.sm)}`,
        typeof props.col === 'object' && ('md' in props.col) && `g-col-md${suffix(props.col.md)}`,
        typeof props.col === 'object' && ('lg' in props.col) && `g-col-lg${suffix(props.col.lg)}`,
        typeof props.col === 'object' && ('xl' in props.col) && `g-col-xl${suffix(props.col.xl)}`,
        typeof props.col === 'object' && ('xxl' in props.col) && `g-col-xxl${suffix(props.col.xxl)}`,
        !!getDefaultSizeValue(props.row) && `g-row${suffix(getDefaultSizeValue(props.row))}`,
        typeof props.row === 'object' && ('sm' in props.row) && `g-row-sm${suffix(props.row.sm)}`,
        typeof props.row === 'object' && ('md' in props.row) && `g-row-md${suffix(props.row.md)}`,
        typeof props.row === 'object' && ('lg' in props.row) && `g-row-lg${suffix(props.row.lg)}`,
        typeof props.row === 'object' && ('xl' in props.row) && `g-row-xl${suffix(props.row.xl)}`,
        typeof props.row === 'object' && ('xxl' in props.row) && `g-row-xxl${suffix(props.row.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};



/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const GridCol = styled.div.attrs((props: TStyledProps<IGridColProps>) => ({
    'data-grid': generateDebugData(props),
}))`
    ${(props: TStyledProps<IGridColProps>) => {
        const defaultColSpanArg = getDefaultSizeValue(props.col);
        const defaultRowSpanArg = getDefaultSizeValue(props.row);

        return css`
            // 最小尺寸
            ${defaultColSpanArg && cssGetter.col(defaultColSpanArg)};
            ${defaultRowSpanArg && cssGetter.row(defaultRowSpanArg)};

            ${generateRWDStyled(props)};
        `;
    }}
`;

export default GridCol;

