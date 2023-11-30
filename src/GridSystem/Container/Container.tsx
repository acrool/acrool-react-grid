import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps} from '../../types';
import {createBreakpoint, createInfo} from './utils';




/**
 * Container Component
 *
 * Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.
 *
 * By [Layout Container](https://bear-react-grid.pages.dev/docs/layout/container)
 */
const Container = styled.div.attrs((props: TStyledProps<IContainerProps>) => ({
    'data-grid': createInfo(props),
}))`
  --bear-gutter-x: ${props => props.theme[themeName]?.gutter};
  --bear-gutter-y: 0;

  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(var(--bear-gutter-x) * .5);
  padding-left: calc(var(--bear-gutter-x) * .5);

  ${(props: TStyledProps<IContainerProps>) => css`
      ${props.fluid !== true && createBreakpoint(props)}
  `}
`;

export default Container;
