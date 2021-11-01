import React from 'react';
import styled, {css} from 'styled-components/macro';
import {ContainerProps} from './types';

import {themeName} from '../../config';
import media from '../../media';
import getDataName from './getDataName';

const generateMedia = (props: any) => Object.keys(props.theme.imreactStyledGrid.gridBreakpoints)
    .map(sizeName => {
        if (props.theme.imreactStyledGrid.gridBreakpoints[sizeName] > 0) {
            return media[sizeName]`
                max-width: ${props.theme.imreactStyledGrid.containerMaxWidths[sizeName]}px;
            `;
        }
        return false;
    })
    .filter(row => row !== false);
;

/**
 * Row Component
 */
const Container: any = styled.div.attrs((props: ContainerProps) => ({
    'data-grid': 'container',
    'data-debug': getDataName(props),
}))`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${(props: any) => css`
     padding-right: ${props.theme.imreactStyledGrid?.gridGutterWidth}px;
     padding-left: ${props.theme.imreactStyledGrid?.gridGutterWidth}px;

     ${!props.fluid && css`
        ${generateMedia(props)};
    `}
 `}
`;

export default (props: ContainerProps) => <Container {...props}/>;
