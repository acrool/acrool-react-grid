import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps} from '../../types';
import {generateRWDStyled} from './utils';

/**
 * Container Component
 */
const Container = styled.div.attrs((props: TStyledProps<IContainerProps>) => ({
    'data-container': props.fluid ? 'fluid': '',
}))`
  ${(props: TStyledProps<IContainerProps>) => css`
     --bear-gutter-x: ${props.theme[themeName]?.gridGutterWidth};

     ${!props.fluid && css`
        ${generateRWDStyled(props)};
    `}
 `}
`;

export default Container;
