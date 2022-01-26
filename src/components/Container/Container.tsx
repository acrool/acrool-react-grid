import React from 'react';
import styled, {css, ThemeProps} from 'styled-components/macro';
import {IContainerProps} from './types';

import defaultTheme from '../../config';
import media, {ITheme, NoXsMediaSize} from '../../media';
import getDataName from './getDataName';
import {TGridStyledComponent} from '../..';

const mediaSizes = Object.keys(defaultTheme.containerMaxWidths) as NoXsMediaSize[];

const generateMedia = (props: any) => mediaSizes
    .map(sizeName => {
        return media[sizeName]`
            max-width: ${props.theme.styledGrid.containerMaxWidths[sizeName]}px;
        `;
    });
;

/**
 * Row Component
 */
const Container: TGridStyledComponent = styled.div.attrs((props: IContainerProps) => ({
    'data-grid': 'container',
    'data-debug': getDataName(props),
}))`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${(props: IContainerProps & ThemeProps<{
    styledGrid: ITheme
  }>) => css`
     box-sizing: border-box;
     padding-right: ${props.theme.styledGrid.gridGutterWidth}px;
     padding-left: ${props.theme.styledGrid.gridGutterWidth}px;

     ${!props.fluid && css`
        ${generateMedia(props)};
    `}
 `}
`;

export default (props: IContainerProps) => <Container {...props}/>;
