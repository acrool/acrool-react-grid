import React from 'react';
import styled from 'styled-components';
import {TStyledProps, IFlexProps} from '../../types';


/**
 * Flex Component
 */
const Flex = styled.div.attrs((props: TStyledProps<IFlexProps>) => ({
    'data-grid': 'flex',
}))`
    display: flex;
    flex-direction: row;
`;

export default Flex;

