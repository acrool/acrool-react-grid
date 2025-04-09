import styled, {css} from 'styled-components';
import {TStyledProps, IFlexProps, IFlexStdProps} from '../../types';
import {createInfo, createCol} from './utils';


/**
 * Flex Component
 *
 * Used to explicitly display flexbox html tags
 *
 * By [Layout Flex](https://acrool-react-grid.pages.dev/docs/layout/flex)
 */
const FlexStd = styled.div<
    { 'data-grid'?: string } &
    TStyledProps<IFlexStdProps>
>`
    display: flex;

    ${props => css`
        ${props.$column && createCol()};
    `}
`;


const Flex = (props: TStyledProps<IFlexProps>) => {
    const {column, forwardAs, forwardRef, children, onClick, ...htmlProps} = props;
    return <FlexStd
        {...htmlProps}

        data-grid={createInfo(props)}
        $column={column}
        forwardAs={forwardAs}
        $forwardRef={forwardRef}
        children={children}
        onClick={onClick}
    />;
};

export default Flex;

