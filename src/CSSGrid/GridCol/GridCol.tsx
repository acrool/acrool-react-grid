import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, TGridCols, IGridColProps} from '../../types';
import {cssGetter, generateRWDStyled, createInfo} from './utils';
import {getDefaultSizeValue} from '../../utils';





/**
 * Grid Col Component
 */
const GridCol = styled.div.attrs((props: TStyledProps<IGridColProps>) => ({
    'data-grid': createInfo(props),
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

