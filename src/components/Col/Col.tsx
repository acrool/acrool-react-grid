import React from 'react';
import styled, {css} from 'styled-components/macro';

import getCss from './css';
import getDataName from './getDataName';
import media, {NoXsMediaSize} from '../../media';
import {isEmpty} from '../../utils';
import defaultTheme from '../../config';
import {ColProps} from './types';
import {themeProps, TGridStyledComponent} from '../GridThemeProvider/types';

type Props = ColProps & {
    theme: themeProps;
};

const mediaSizes = Object.keys(defaultTheme.containerMaxWidths) as NoXsMediaSize[];

const generateMedia = (props: any) => mediaSizes
    .map(sizeName => {
        return media[sizeName]`
             padding-right: ${props.theme.styledGrid.gridGutterWidthMedia[sizeName]}px;
             padding-left: ${props.theme.styledGrid.gridGutterWidthMedia[sizeName]}px;

            ${!isEmpty(props[sizeName]) && css`
                ${getCss.col(props[sizeName], props.theme.styledGrid.gridColumns)};
            `}
    `;
    });

/**
 * Col Component
 * breakpoints sort: sm => xl
 *
 * qa: min-height=1px
 * https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/
 *
 */
const Col: TGridStyledComponent = styled.div.attrs((props: Props) => ({
    'data-grid': 'col',
    'data-debug': getDataName(props),
}))`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1px;

  ${(props: any) => css`
     padding-right: ${props.theme.styledGrid.gridGutterWidth}px;
     padding-left: ${props.theme.styledGrid.gridGutterWidth}px;

     >[data-grid=row]{
        flex: 0 1 100%;
    }

     min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版
     ${props.col && getCss.col(props.col, props.theme.styledGrid.gridColumns)};

     ${generateMedia(props)};
 `}
`;

export default ({forwardRef, forwardAs, ...props}: ColProps) => <Col ref={forwardRef} as={forwardAs} {...props}/>;
