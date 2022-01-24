import styled from 'styled-components/macro';
import {EAlign} from './types';

export enum EDirection {
    row='row',
    column ='column'
}

const Flex = styled.div<{
    direction?: EDirection
    vertical?: EAlign; // 垂直
    horizontal?: EAlign; // 水平
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.direction ?? EDirection.row};
  justify-content: ${props => props.horizontal ?? EAlign.start};
  align-items: ${props => props.vertical ?? EAlign.start};
`;

export default Flex;
