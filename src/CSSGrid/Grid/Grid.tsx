import React, {Children} from 'react';
import styled, {css} from 'styled-components';
import {
    TStyledProps,
    IGridProps,
    IColProps,
    TGridTemplate,
    TGridGaps,
    NoXsMediaSize,
    TMediaSize,
    TGridCol, RecordOption
} from '../../types';
import {cssGetter, generateRWDStyled} from './utils';
import {themeName} from '../../config';
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






/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const Grid = styled.div.attrs((props: TStyledProps<IGridProps>) => ({
    'data-grid': generateDebugData(props),
}))`
  display: grid;

  ${(props: TStyledProps<IGridProps>) => {
        const defaultColumnArg = getDefaultSizeValue(props.columns);
        const defaultRowArg = getDefaultSizeValue(props.rows);
        const defaultGapArg = getDefaultSizeValue(props.gap);
        const defaultColumnsGapArg = getDefaultSizeValue(props.columnsGap);
        const defaultRowsGapArg = getDefaultSizeValue(props.rowsGap);
        return css`
      gap: ${props.theme[themeName]?.gutter};
      grid-template-rows: auto;

      ${!props.columns && props.children && Array.isArray(props.children) && css`
          grid-template-columns: ${`repeat(${Children.count(props.children) ?? 1}, auto)`};
      `}

      // 最小尺寸
      ${defaultColumnArg && cssGetter.columns(defaultColumnArg)};
      ${defaultRowArg && cssGetter.rows(defaultRowArg)};

      ${defaultGapArg && cssGetter.gap(defaultGapArg)};
      ${defaultColumnsGapArg && cssGetter.columnGap(defaultColumnsGapArg)};
      ${defaultRowsGapArg && cssGetter.rowGap(defaultRowsGapArg)};

      ${generateRWDStyled(props)};
      `;
    }}
`;

export default Grid;

