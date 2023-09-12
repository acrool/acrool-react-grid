import styled from 'styled-components';
import CSS from 'csstype';
import {TRowVertical, TRowHorizontal, TFlexDirection} from '../../types';


/**
 * Flex Component
 */
const Flex = styled.div<{
    style?: CSS.Properties,
    className?: string,
    direction?: TFlexDirection
    vertical?: TRowVertical; // 垂直
    horizontal?: TRowHorizontal; // 水平
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.horizontal ? props.horizontal : 'left'};
  align-items: ${props => props.vertical ? props.vertical : 'top'};
`;

export default Flex;
