import styled, {css} from 'styled-components';
import {TStyledProps, IGridProps} from '../../types';
import {themeName} from '../../config';
import {createBreakpoint, cssGetter, createInfo} from './utils';




/**
 * Grid Component
 *
 * Displayed by externally set fence
 *
 * By [Layout / Grid](https://acrool-react-grid.pages.dev/docs/layout/grid)
 */
const Grid = styled.div.attrs<
    {
        'data-grid'?: string
    } & TStyledProps<IGridProps>
>(props => ({
    'data-grid': createInfo(props),
}))`
    --acrool-gutter-x: ${props => props.theme[themeName]?.spacer};
    --acrool-gutter-y: 0;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(${props => props.theme[themeName]?.gridColumns}, 1fr);
    column-gap: var(--acrool-gutter-x);
    row-gap: var(--acrool-gutter-y);


    ${props => css`
        ${props.col && cssGetter.col(props.col)};

        ${createBreakpoint(props)};
    `}

`;

export default Grid;

