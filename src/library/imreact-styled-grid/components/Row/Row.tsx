import React from 'react';
import styled, {css} from 'styled-components/macro';
import getDataName from './getDataName';
import {themeName} from '../../config';
import {RowProps} from './types';
import media from '../../media';

/**
 * Get Row Margin
 * @param props
 * @returns {*}
 */
const getRowMargin = (props: any) => (props.noGutters ? 0 : `-${props.theme.imreactStyledGrid.gridGutterWidth}px`);

const generateMedia = (props: any) => Object.keys(props.theme.imreactStyledGrid.gridBreakpoints)
    .map(sizeName => {
        if (props.theme.imreactStyledGrid.gridBreakpoints[sizeName] > 0) {
            return media[sizeName]`
                margin-left: -${props.theme.imreactStyledGrid.gridGutterWidthMedia[sizeName]}px;
                margin-right: -${props.theme.imreactStyledGrid.gridGutterWidthMedia[sizeName]}px;
            `;
        }
        return false;
    })
    .filter(row => row !== false);
;

/**
 * Row Component
 */
const Row: any = styled.div.attrs((props: any) => ({
    'data-grid': 'row',
    'data-debug': getDataName(props),
}))`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  ${(props: any) => css`
     margin-right: ${getRowMargin(props)};
     margin-left: ${getRowMargin(props)};

     // ps: 設定會 width 100% 會產生 margin 抵銷失敗


     ${!props.noGutters && css`
        ${generateMedia(props)}
     `}

     ${props.noGutters && css`
        >[data-grid=col]{
            padding-right: 0;
            padding-left: 0;
        }
     `}
 `}
`;

export default ({forwardAs, ...props}: RowProps) => <Row as={forwardAs} {...props}/>;

