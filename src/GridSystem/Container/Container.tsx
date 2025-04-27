import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps, IContainerStdProps} from '../../types';
import {createBreakpoint, createInfo} from './utils';
import {calcUnitSize} from '../../GridThemeProvider/utils';




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
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--acrool-gutter-x, ${props => calcUnitSize(props.theme[themeName].spacer, num => num * .5)});
  padding-left: var(--acrool-gutter-x, ${props => calcUnitSize(props.theme[themeName].spacer, num => num * .5)});

  ${props => css`
      ${props.$fluid !== true && createBreakpoint({
        theme: props.theme,
        fluid: props.$fluid,
    } as TStyledProps<IContainerProps>)};
  `}
`;




const Container = (props: IContainerProps) => {
    const {fluid, forwardAs, forwardRef, children, onClick, ...htmlProps} = props;
    return <ContainerStd
        {...htmlProps}

        data-grid={createInfo(props)}
        as={forwardAs}
        ref={forwardRef}

        children={children}
        onClick={onClick}

        $fluid={fluid}
    />;
};


export default Container;
