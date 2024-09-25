import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IFlexProps} from '../../types';
import {createInfo, createCol} from './utils';


/**
 * Flex Component
 *
 * Used to explicitly display flexbox html tags
 *
 * By [Layout Flex](https://acrool-react-grid.pages.dev/docs/layout/flex)
 */
const Flex = styled.div.attrs((props: TStyledProps<IFlexProps>) => ({
    'data-grid': createInfo(props),
}))`
    display: flex;

    ${(props: TStyledProps<IFlexProps>) => css`
     ${props.column && createCol()};
   `}
`;

export default Flex;

