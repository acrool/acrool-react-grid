import styled, {css} from 'styled-components';
import {themeName} from '../../config';
import {createBreakpoint, createInfo, createCol} from './utils';
import {TStyledProps, IColProps, IColStdProps} from '../../types';


// about `min-height=1px`
// https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/

/**
 * Col Component
 *
 * Columns are incredibly flexible. There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.
 *
 * By [Layout Grid System Col](https://acrool-react-grid.pages.dev/docs/layout/grid-system/col)
 */
const ColStd = styled.div<
    { 'data-grid'?: string } & TStyledProps<IColStdProps>
>`
  min-height: 1px;
  min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版

  ${props => css`
     ${props.$col && createCol(props.$col, props.theme[themeName]?.gridColumns)};

      ${createBreakpoint({
    theme: props.theme,
    sm: props.$sm,
    md: props.$md,
    lg: props.$lg,
    xl: props.$xl,
    xxl: props.$xxl,
} as TStyledProps<IColProps>)};
  `}
`;



const Col = (props: TStyledProps<IColProps>) => {
    const {col, sm, md, lg, xl, xxl, forwardAs, forwardRef, children, onClick, ...htmlProps} = props;

    return <ColStd
        {...htmlProps}
        data-grid={createInfo(props)}

        $col={col}
        $sm={sm}
        $md={md}
        $lg={lg}
        $xl={xl}
        $xxl={xxl}

        forwardAs={forwardAs}
        $forwardRef={forwardRef}
        children={children}
        onClick={onClick}
    />;
};


export default Col;
