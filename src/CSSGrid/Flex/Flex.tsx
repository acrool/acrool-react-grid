import React from 'react';
import styled from 'styled-components';
import {TStyledProps, IFlexProps} from '../../types';


/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const Flex = styled.div.attrs((props: TStyledProps<IFlexProps>) => ({
    'data-grid': 'flex',
}))`
    display: flex;
    flex-direction: row;
`;

export default Flex;

