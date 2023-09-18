'use client';

import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps} from '../../types';
import {generateRWDStyled} from './utils';

/**
 * Container Component
 */
const Container = styled.div<TStyledProps<IContainerProps>>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  padding-right: var(--bear-gutter-x);
  padding-left: var(--bear-gutter-x);

  ${(props: TStyledProps<IContainerProps>) => css`
     --bear-gutter-x: ${props.theme[themeName]?.gridGutterWidth};

     ${!props.fluid && css`
        ${generateRWDStyled(props)};
    `}
 `}
`;

export default Container;
