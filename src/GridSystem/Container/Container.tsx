import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {TStyledProps, IContainerProps} from '../../types';
import {createBreakpoint} from './utils';
import {cssGetter} from '../Col/utils';



/**
 * 判斷是否為空
 * @param value
 */
const suffix = (value: any) => {
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
        props.sm && `container-fluid-sm${suffix(props.sm)}`,
        props.md && `container-fluid-md${suffix(props.md)}`,
        props.lg && `container-fluid-lg${suffix(props.lg)}`,
        props.xl && `container-fluid-xl${suffix(props.xl)}`,
        props.xxl && `container-fluid-xxl${suffix(props.xxl)}`,
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
