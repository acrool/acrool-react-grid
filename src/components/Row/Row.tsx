import React from 'react';
import styled, {css} from 'styled-components/macro';
import getDataName from './getDataName';
import defaultTheme from '../../config';
import {EAlign, IRowProps} from './types';
import media, {NoXsMediaSize} from '../../media';

/**
 * Get Row Margin
 * @param props
 * @returns {*}
 */
const getRowMargin = (props: any) => (props.noGutters ? 0 : `-${props.theme.styledGrid.gridGutterWidth}px`);

const mediaSizes = Object.keys(defaultTheme.containerMaxWidths) as NoXsMediaSize[];

const generateMedia = (props: any) => mediaSizes
    .map(sizeName => {
        return media[sizeName]`
            margin-left: -${props.theme.styledGrid.gridGutterWidthMedia[sizeName]}px;
            margin-right: -${props.theme.styledGrid.gridGutterWidthMedia[sizeName]}px;
        `;
    });

/**
 * Row Component
 */
const Row: any = styled.div.attrs((props: IRowProps) => ({
    'data-grid': 'row',
    'data-debug': getDataName(props),
}))`
  box-sizing: border-box;
  padding-inline-start: 0; // 避免 ul 預設樣式位移
  
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  
  

  ${(props: IRowProps) => css`
     margin-right: ${getRowMargin(props)};
     margin-left: ${getRowMargin(props)};
     
     justify-content: ${props.horizontal ? props.horizontal : EAlign.start};
     align-items: ${props.vertical ? props.vertical : EAlign.start};

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

export default ({forwardRef, forwardAs, ...props}: IRowProps) => <Row ref={forwardRef} as={forwardAs} {...props}/>;

