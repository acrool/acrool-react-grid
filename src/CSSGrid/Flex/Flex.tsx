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


const Flex = (props: IFlexProps) => {
    const {column, forwardAs, forwardRef, children, onClick, ...htmlProps} = props;
    return <FlexStd
        {...htmlProps}

        data-grid={createInfo(props)}
        // as={forwardAs}
        ref={forwardRef}

        children={children}
        onClick={onClick}

        $column={column}

    />;
};

export default Flex;

