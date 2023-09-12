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
        props.col && `columns${suffix(props.col)}`,
        props.colSm && `columns-sm${suffix(props.colSm)}`,
        props.colMd && `columns-md${suffix(props.colMd)}`,
        props.colLg && `columns-lg${suffix(props.colLg)}`,
        props.colXl && `columns-xl${suffix(props.colXl)}`,
        props.colXXl && `columns-xxl${suffix(props.colXXl)}`,
        props.row && `rows${suffix(props.row)}`,
        props.rowSm && `rows-sm${suffix(props.rowSm)}`,
        props.rowMd && `rows-md${suffix(props.rowMd)}`,
        props.rowLg && `rows-lg${suffix(props.rowLg)}`,
        props.rowXl && `rows-xl${suffix(props.rowXl)}`,
        props.rowXXl && `rows-xxl${suffix(props.rowXXl)}`,
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
      ${props.col && cssGetter.col(props.col)};
      ${props.row && cssGetter.row(props.col)};
      ${props.gap && cssGetter.gap(props.gap)};
      ${props.columnGap && cssGetter.columnGap(props.columnGap)};
      ${props.rowGap && cssGetter.rowGap(props.rowGap)};
 `}
`;

export default Grid;

