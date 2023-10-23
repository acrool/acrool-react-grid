import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps} from '../../types';
import {createBreakpoint} from './utils';
import {cssGetter} from '../Col/utils';


/**
 * 判斷是否為空
 * @param value
 */
const suffixCol = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    }
    if (value === 'auto') {
        return '-auto';
    }
    return '';
};

/**
 * 判斷是否為空
 * @param value
 */
const suffixContainer = (value: any) => {
    if (!!Number(value)) {
        return `-${value}`;
    }
    return '';
};

/**
 * 產生 Debug 資訊
 * @param props
 */
const generateDebugData = (props: TStyledProps<IContainerProps>) => {
    return [
        'container',
        props.fluid && `container-fluid${suffixContainer(props.fluid)}`,
        props.col && `col${suffixCol(props.col)}`,
        props.sm && `col-sm${suffixCol(props.sm)}`,
        props.md && `col-md${suffixCol(props.md)}`,
        props.lg && `col-lg${suffixCol(props.lg)}`,
        props.xl && `col-xl${suffixCol(props.xl)}`,
        props.xxl && `col-xxl${suffixCol(props.xxl)}`,
    ]
        .filter(Boolean)
        .join(' ');
};


/**
 * Container Component
 */
const Container = styled.div.attrs((props: TStyledProps<IContainerProps>) => ({
    'data-grid': generateDebugData(props),
}))`
  --bear-gutter-x: ${props => props.theme[themeName]?.gutter};
  --bear-gutter-y: 0;

  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--bear-gutter-x);
  padding-left: var(--bear-gutter-x);

  ${(props: TStyledProps<IContainerProps>) => css`

      ${props.fluid && css`
         max-width: none;
     `}
      ${props.col && cssGetter.col(props.col, props.theme[themeName]?.gridColumns)};

      ${createBreakpoint(props)};

  `}
`;

export default Container;
