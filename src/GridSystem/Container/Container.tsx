import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps, IContainerStdProps, IColProps} from '../../types';
import {createBreakpoint, createInfo} from './utils';




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
  --acrool-gutter-x: ${props => props.theme[themeName]?.spacer};
  --acrool-gutter-y: 0;


  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(var(--acrool-gutter-x) * .5);
  padding-left: calc(var(--acrool-gutter-x) * .5);

  ${props => css`
      ${props.$fluid !== true && createBreakpoint({
        theme: props.theme,
        fluid: props.$fluid,
    } as TStyledProps<IContainerProps>)};
  `}
`;




const Container = (props: TStyledProps<IContainerProps>) => {
    const {fluid, forwardAs, forwardRef, children, onClick, ...htmlProps} = props;
    return <ContainerStd
        {...htmlProps}
        data-grid={createInfo(props)}

        $fluid={fluid}

        forwardAs={forwardAs}
        $forwardRef={forwardRef}
        children={children}
        onClick={onClick}
    />;
};


export default Container;
