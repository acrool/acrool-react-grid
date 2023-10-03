import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IFlexProps, TDirection} from '../../types';
import {cssGetter, generateRWDStyled} from './utils';
import {getDefaultSizeValue} from '../../utils';
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

/**
 * 產生 Debug 資訊
 * @param props
 */
const generateDebugData = (props: TStyledProps<IFlexProps>) => {
    return [
        !!getDefaultSizeValue(props.direction) && `flex-direction-${suffix(getDefaultSizeValue(props.direction))}`,
        typeof props.direction === 'object' && ('sm' in props.direction) && `flex-direction-sm${suffix(props.direction.sm)}`,
        typeof props.direction === 'object' && ('md' in props.direction) && `flex-direction-md${suffix(props.direction.md)}`,
        typeof props.direction === 'object' && ('lg' in props.direction) && `flex-direction-lg${suffix(props.direction.lg)}`,
        typeof props.direction === 'object' && ('xl' in props.direction) && `flex-direction-xl${suffix(props.direction.xl)}`,
        typeof props.direction === 'object' && ('xxl' in props.direction) && `flex-direction-xxl${suffix(props.direction.xxl)}`,

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
const Flex = styled.div.attrs((props: TStyledProps<IFlexProps>) => ({
    'data-grid': generateDebugData(props),
}))`
    display: flex;
    flex-direction: row;

    ${(props: TStyledProps<IFlexProps>) => {
        const defaultColSpanArg = getDefaultSizeValue(props.direction);

        const defaultGapArg = getDefaultSizeValue(props.gap);
        const defaultColumnsGapArg = getDefaultSizeValue(props.columnsGap);
        const defaultRowsGapArg = getDefaultSizeValue(props.rowsGap);

        return css`
            gap: ${props.theme[themeName]?.gutter};
            
            // 最小尺寸
            ${defaultColSpanArg && cssGetter.direction(defaultColSpanArg)};

            ${defaultGapArg && cssGetter.gap(defaultGapArg)};
            ${defaultColumnsGapArg && cssGetter.columnGap(defaultColumnsGapArg)};
            ${defaultRowsGapArg && cssGetter.rowGap(defaultRowsGapArg)};

            ${generateRWDStyled(props)};
        `;
    }}
`;

export default Flex;

