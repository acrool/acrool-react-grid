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
const Flex = styled.div.attrs<
    {
        'data-grid'?: string
    } & TStyledProps<IFlexProps>
>(props => ({
    'data-grid': createInfo(props),
}))`
    display: flex;

    ${props => css`
        ${props.column && createCol()};
    `}
`;

export default Flex;

