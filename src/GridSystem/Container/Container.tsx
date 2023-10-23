import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps} from '../../types';
import {createBreakpoint, createInfo} from './utils';
import {cssGetter} from '../Col/utils';




/**
 * Container Component
 */
const Container = styled.div.attrs((props: TStyledProps<IContainerProps>) => ({
    'data-grid': createInfo(props),
}))`
  --bear-gutter-x: ${props => props.theme[themeName]?.gutter};
  --bear-gutter-y: 0;

  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--bear-gutter-x);
  padding-left: var(--bear-gutter-x);

  ${(props: TStyledProps<IContainerProps>) => css`

      ${props.fluid && css`
         max-width: none;
     `}
      ${props.col && cssGetter.col(props.col, props.theme[themeName]?.gridColumns)};

      ${createBreakpoint(props)};

  `}
`;

export default Container;
