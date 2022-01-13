import React from 'react';
import styled, {css} from 'styled-components/macro';

import getCss from './css';
import getDataName from './getDataName';
import media from '../../media';
import {isEmpty} from '../../utils';
import {themeName} from '../../config';
import {ColProps} from './types';
import {themeProps} from '../ThemeProvider/types';

type Props = ColProps & {
    theme: themeProps;
};

// eslint-disable-next-line array-callback-return
const generateMedia = (props: any) => Object
    .keys(props.theme.reactStyledGrid.gridBreakpoints)
    .filter(sizeName => sizeName !== 'xs')
    .map(sizeName => {
        return media[sizeName]`
             padding-right: ${props.theme.reactStyledGrid.gridGutterWidthMedia[sizeName]}px;
             padding-left: ${props.theme.reactStyledGrid.gridGutterWidthMedia[sizeName]}px;

            ${!isEmpty(props[sizeName]) && css`
                ${getCss.col(props[sizeName], props.theme.reactStyledGrid.gridColumns)};
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
const Col: any = styled.div.attrs((props: Props) => ({
    'data-grid': 'col',
    'data-debug': getDataName(props),
}))`
  position: relative;
  width: 100%;
  min-height: 1px;

  ${(props: any) => css`
     padding-right: ${props.theme.reactStyledGrid.gridGutterWidth}px;
     padding-left: ${props.theme.reactStyledGrid.gridGutterWidth}px;

     >[data-grid=row]{
        flex: 0 1 100%;
    }

     min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版
     ${props.col && getCss.col(props.col, props.theme.reactStyledGrid.gridColumns)};

     ${generateMedia(props)};
 `}
`;

export default ({forwardRef, forwardAs, ...props}: ColProps) => <Col ref={forwardRef} as={forwardAs} {...props}/>;
