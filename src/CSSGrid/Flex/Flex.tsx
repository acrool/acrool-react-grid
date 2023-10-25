import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IFlexProps} from '../../types';
import {createInfo, createBreakpoint, createCol} from './utils';


/**
 * Flex Component
 */
const Flex = styled.div.attrs((props: TStyledProps<IFlexProps>) => ({
    'data-grid': createInfo(props),
}))`
    display: flex;

    ${(props: TStyledProps<IFlexProps>) => css`
     ${props.col && createCol(props.col)};
     ${createBreakpoint(props)};
   `}
`;

export default Flex;

