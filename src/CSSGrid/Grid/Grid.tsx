'use client';

import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IGridProps, IColProps, TGridTemplate} from '../../types';
import {cssGetter, generateRWDStyled} from './utils';
import {themeName} from '../../config';



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
const generateDebugData = (props: TStyledProps<IGridProps>) => {
    return [
        !!getDefaultSizeValue(props.columns) && `columns${suffix(getDefaultSizeValue(props.columns))}`,
        typeof props.columns === 'object' && ('sm' in props.columns) && `columns-sm${suffix(props.columns.sm)}`,
        typeof props.columns === 'object' && ('md' in props.columns) && `columns-md${suffix(props.columns.md)}`,
        typeof props.columns === 'object' && ('lg' in props.columns) && `columns-lg${suffix(props.columns.lg)}`,
        typeof props.columns === 'object' && ('xl' in props.columns) && `columns-xl${suffix(props.columns.xl)}`,
        typeof props.columns === 'object' && ('xxl' in props.columns) && `columns-xxl${suffix(props.columns.xxl)}`,
        !!getDefaultSizeValue(props.rows) && `rows${suffix(getDefaultSizeValue(props.rows))}`,
        typeof props.rows === 'object' && ('sm' in props.rows) && `rows-sm${suffix(props.rows.sm)}`,
        typeof props.rows === 'object' && ('md' in props.rows) && `rows-md${suffix(props.rows.md)}`,
        typeof props.rows === 'object' && ('lg' in props.rows) && `rows-lg${suffix(props.rows.lg)}`,
        typeof props.rows === 'object' && ('xl' in props.rows) && `rows-xl${suffix(props.rows.xl)}`,
        typeof props.rows === 'object' && ('xxl' in props.rows) && `rows-xxl${suffix(props.rows.xxl)}`,

        props.gap && `gap-[${props.gap}]`,
        props.columnsGap && `gap-[${props.columnsGap}]`,
        props.rowsGap && `gap-[${props.rowsGap}]`,
    ]
        .filter(Boolean)
        .join(' ');
};


const getDefaultSizeValue = (column?: TGridTemplate) => {
    if((typeof column === 'object' && 'xs' in column)){
        return column.xs;
    }
    return column;
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
  display: grid;
  grid-template-rows: var(--bear-rows, ${props => 'repeat(1, 1fr)'});
  grid-template-columns: var(--bear-columns, ${props => `repeat(${props.theme[themeName]?.gridColumns}, 1fr)`});
  gap: var(--bear-gap, ${props => props.theme[themeName]?.gridGutterWidth});

  ${(props: TStyledProps<IGridProps>) => css`
      ${!!getDefaultSizeValue(props.columns) && cssGetter.columns(getDefaultSizeValue(props.columns))};
      ${!!getDefaultSizeValue(props.rows) && cssGetter.rows(getDefaultSizeValue(props.rows))};
      ${props.gap && cssGetter.gap(props.gap)};
      ${props.columnsGap && cssGetter.columnGap(props.columnsGap)};
      ${props.rowsGap && cssGetter.rowGap(props.rowsGap)};

      ${generateRWDStyled(props)};
 `}
`;

export default Grid;

