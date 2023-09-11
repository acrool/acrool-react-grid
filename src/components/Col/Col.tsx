import React from 'react';
import styled, {css} from 'styled-components';
import media from '../../media';
import {mediaSizes, themeName} from '../../config';

import {FCChildrenProps, TStyledProps} from '../../types';

import getCss from './css';
import {TColumn} from './types';


interface IProps extends FCChildrenProps{
    col?: TColumn;
    sm?: TColumn;
    md?: TColumn;
    lg?: TColumn;
    xl?: TColumn;
    xxl?: TColumn;
}


/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    } if (value === 'auto') {
        return '-auto';
    }
    return '';
};



/**
 * 產生 Debug 資訊
 * @param props
 */
const generateDebugData = (props: TStyledProps<IProps>) => {
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
            ${typeof props[sizeName] !== 'undefined' && css`
                ${getCss.col(props[sizeName], props.theme[themeName]?.gridColumns)};
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
    'data-col': generateDebugData(props),
}))`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1px;
  min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版

  ${(props: TStyledProps<IProps>) => css`
     ${props.col && getCss.col(props.col, props.theme[themeName]?.gridColumns)};
     ${generateRWDStyled(props)};
 `}
`;

export default Col;
