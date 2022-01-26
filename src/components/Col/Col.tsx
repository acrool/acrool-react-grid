import React, {MouseEvent} from 'react';
import styled, {css} from 'styled-components/macro';

import getCss from './css';
import {TColumn} from './types';
import media from '../../media';
import {isEmpty, suffix} from '../../utils';
import {mediaSizes} from '../../config';
import {FCChildrenProps, TStyledProps} from '../../typings';


interface IProps extends FCChildrenProps{
    col?: TColumn;
    sm?: TColumn;
    md?: TColumn;
    lg?: TColumn;
    xl?: TColumn;
    xxl?: TColumn;
}



/**
 * 產生 Debug 資訊
 * @param props
 */
const generateDebugData = (props: TStyledProps<IProps>) => {
    if(process.env.NODE_ENV === 'production'){
        return undefined;
    }
    return [
        props.col && `col${suffix(props.col)}`,
        props.sm && `col-sm${suffix(props.sm)}`,
        props.md && `col-md${suffix(props.md)}`,
        props.lg && `col-lg${suffix(props.lg)}`,
        props.xl && `col-xl${suffix(props.xl)}`,
        props.xxl && `col-xxl${suffix(props.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};



/**
 * 產生 RWD 樣式
 * @param props
 */
const generateRWDStyled = (props: TStyledProps<IProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
             padding-right: ${props.theme.styledGrid.gridGutterWidthMedia[sizeName]}px;
             padding-left: ${props.theme.styledGrid.gridGutterWidthMedia[sizeName]}px;

            ${!isEmpty(props[sizeName]) && css`
                ${getCss.col(props[sizeName], props.theme.styledGrid.gridColumns)};
            `}
    `;
        });
};

/**
 * Col Component
 * breakpoints sort: sm => xl
 *
 * qa: min-height=1px
 * https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/
 *
 */
const Col = styled.div.attrs((props: TStyledProps<IProps>) => ({
    'data-grid': 'col',
    'data-debug': generateDebugData(props),
}))`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1px;

  ${(props: TStyledProps<IProps>) => css`
     padding-right: ${props.theme.styledGrid.gridGutterWidth}px;
     padding-left: ${props.theme.styledGrid.gridGutterWidth}px;

     >[data-grid=row]{
        flex: 0 1 100%;
    }

     min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版
     ${props.col && getCss.col(props.col, props.theme.styledGrid.gridColumns)};

     ${generateRWDStyled(props)};
 `}
`;

export default Col;
