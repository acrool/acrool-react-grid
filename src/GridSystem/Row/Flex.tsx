import styled from 'styled-components';
import CSS from 'csstype';
import {TFlexDirection} from '../../types';


/**
 * Flex Component
 */
const Flex = styled.div<{
    style?: CSS.Properties,
    className?: string,
    direction?: TFlexDirection
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
`;

export default Flex;
