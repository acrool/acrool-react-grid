import React from 'react';
import styled, {css} from 'styled-components';
import media from '../../media';
import {mediaSizes, themeName} from '../../config';
import {FCChildrenProps, TStyledProps} from '../../types';



interface IProps extends FCChildrenProps{
    fluid?: boolean;
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
        props.fluid ? 'container-fluid' : 'container',
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
            --bear-gutter-x: ${props.theme[themeName]?.gridGutterWidth}; 
            max-width: ${props.theme[themeName]?.containerMaxWidths[sizeName]}px;
        `;
        });
};








/**
 * 元件 Container
 */
const Container = styled.div.attrs((props: TStyledProps<IProps>) => ({
    'data-container': props.fluid ? 'fluid': '',
}))`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  padding-right: var(--bear-gutter-x);
  padding-left: var(--bear-gutter-x);
  
  ${(props: TStyledProps<IProps>) => css`
     --bear-gutter-x: ${props.theme[themeName]?.gridGutterWidth}; 

     ${!props.fluid && css`
        ${generateRWDStyled(props)};
    `}
 `}
`;

export default Container;
