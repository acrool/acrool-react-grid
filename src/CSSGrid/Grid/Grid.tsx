import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IGridProps, IColProps} from '../../types';
import {cssGetter} from './utils';



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
const generateDebugData = (props: TStyledProps<IGridProps>) => {
    return [
        props.column && `column${suffix(props.column)}`,
        props.columnSm && `column-sm${suffix(props.columnSm)}`,
        props.columnMd && `column-md${suffix(props.columnMd)}`,
        props.columnLg && `column-lg${suffix(props.columnLg)}`,
        props.columnXl && `column-xl${suffix(props.columnXl)}`,
        props.columnXXl && `column-xxl${suffix(props.columnXXl)}`,
        props.row && `row${suffix(props.row)}`,
        props.rowSm && `row-sm${suffix(props.rowSm)}`,
        props.rowMd && `row-md${suffix(props.rowMd)}`,
        props.rowLg && `row-lg${suffix(props.rowLg)}`,
        props.rowXl && `row-xl${suffix(props.rowXl)}`,
        props.rowXXl && `row-xxl${suffix(props.rowXXl)}`,
        props.gap && `gap-[${props.gap}]`,
        props.columnGap && `gap-[${props.columnGap}]`,
        props.rowGap && `gap-[${props.rowGap}]`,
    ]
        .filter(Boolean)
        .join(' ');
};


/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const Grid = styled.div.attrs((props: TStyledProps<IGridProps>) => ({
    'data-grid': generateDebugData(props),
    'data-horizontal': props.horizontal ? props.horizontal: undefined,
    'data-vertical': props.vertical ? props.vertical: undefined,
}))`
  ${(props: TStyledProps<IGridProps>) => css`
      ${props.column && cssGetter.col(props.column)};
      ${props.row && cssGetter.row(props.row)};
      ${props.gap && cssGetter.gap(props.gap)};
      ${props.columnGap && cssGetter.columnGap(props.columnGap)};
      ${props.rowGap && cssGetter.rowGap(props.rowGap)};
 `}
`;

export default Grid;

