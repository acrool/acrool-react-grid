'use client';

import React from 'react';
import styled, {css} from 'styled-components';
import {TStyledProps, IRowProps} from '../../types';
import {themeName} from '../../config';


/**
 * Row Component
 * align-items 預設加上 flex-start, 會讓鄰居Col高度不會一致
 * ps: 設定會 width 100% 會產生 margin 抵銷失敗
 */
const Row = styled.div<TStyledProps<IRowProps>>`
    --bear-gutter-x: ${props => props.theme[themeName]?.gridGutterWidth ?? '.625rem'};
    --bear-gutter-y: 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bear-gutter-y) * -1);
    margin-right: calc(var(--bear-gutter-x) * -0.5);
    margin-left: calc(var(--bear-gutter-x) * -0.5);
    padding-inline-start: 0; /* 避免 ul 預設樣式位移 */

    > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bear-gutter-x) * 0.5);
        padding-left: calc(var(--bear-gutter-x) * 0.5);
        margin-top: var(--bear-gutter-y);
    }

`;

export default Row;

