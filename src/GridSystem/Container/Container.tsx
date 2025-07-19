import styled, {css} from 'styled-components';

import {IContainerProps, IContainerStdProps,TStyledProps} from '../../types';
import {createBreakpoint, createFluidBreakpoint, createInfo} from './utils';




/**
 * Container Component
 *
 * Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.
 *
 * By [Layout Container](https://acrool-react-grid.pages.dev/docs/layout/container)
 */
const ContainerStd = styled.div<
    { 'data-grid'?: string } & TStyledProps<IContainerStdProps>
>`
  ${props => css`
      ${props.$fluid ?
        createFluidBreakpoint(props):
        createBreakpoint({theme: props.theme, fluid: props.$fluid} as TStyledProps<IContainerProps>)
};
  `}
`;




const Container = (props: IContainerProps) => {
    const {fluid, forwardAs, ref, children, onClick, ...htmlProps} = props;
    return <ContainerStd
        {...htmlProps}

        data-grid="container"
        data-class={createInfo(props)}
        as={forwardAs}
        ref={ref}

        children={children}
        onClick={onClick}

        $fluid={fluid}
    />;
};


export default Container;
