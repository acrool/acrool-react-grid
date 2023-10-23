import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import GridThemeProvider from '../src/GridThemeProvider';
import Grid from '../src/CSSGrid/Grid';
import {auto} from '../src/utils';



describe('Grid Hybrid ', () => {
    it('renders grid + grid-lg-2', () => {
        const {container} = render(<Grid col={1} lg={2}>
            <div>col 1</div>
            <div>col 2</div>
        </Grid>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders grid-auto-2 + grid-md-auto-2', () => {
        const {container} = render(<Grid col={auto(2)} md={auto(2)}>
            <div>col 1</div>
            <div>col 2</div>
        </Grid>
        , {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders grid-4 + grid-md-6', () => {
        const {container} = render(<Grid col={auto(4)} md={auto(6)}>col</Grid>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });
});
