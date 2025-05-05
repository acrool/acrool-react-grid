import styled, {css} from 'styled-components';

import {themeName} from '../../config';
import {IGridProps, IGridStdProps,TStyledProps} from '../../types';
import {createBreakpoint, createInfo,cssGetter} from './utils';




/**
 * Grid Component
 *
 * Displayed by externally set fence
 *
 * By [Layout / Grid](https://acrool-react-grid.pages.dev/docs/layout/grid)
 */
const GridStd = styled.div<
    { 'data-grid'?: string } & TStyledProps<IGridStdProps>
>`
    --acrool-gutter-x: ${props => props.theme[themeName]?.spacer};
    --acrool-gutter-y: 0;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(${props => props.theme[themeName]?.gridColumns}, 1fr);
    column-gap: var(--acrool-gutter-x);
    row-gap: var(--acrool-gutter-y);


    ${props => css`
        ${props.$col && cssGetter.col(props.$col)};

        ${createBreakpoint({
    theme: props.theme,
    sm: props.$sm,
    md: props.$md,
    lg: props.$lg,
    xl: props.$xl,
    xxl: props.$xxl,
} as TStyledProps<IGridProps>)};
    `}

`;


const Grid = (props: IGridProps) => {
    const {col, sm, md, lg, xl, xxl, gap, forwardAs, forwardRef, children, onClick, ...htmlProps} = props;

    return <GridStd
        {...htmlProps}

        data-grid={createInfo(props)}
        as={forwardAs}
        ref={forwardRef}

        children={children}
        onClick={onClick}

        $col={col}
        $sm={sm}
        $md={md}
        $lg={lg}
        $xl={xl}
        $xxl={xxl}

        $gap={gap}

    />;
};


export default Grid;

