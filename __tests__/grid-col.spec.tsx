import 'jest-styled-components';
import '@testing-library/dom';

import {render} from '@testing-library/react';
import React from 'react';

import Grid from '../src/CSSGrid/Grid';
import GridThemeProvider from '../src/GridThemeProvider';



describe('Grid Col', () => {
    it('renders grid default', () => {
        const {container} = render(<Grid col={2}>col</Grid>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-auto', () => {
        const {container} = render(<Grid col={2}>
            <div>col 1</div>
            <div>col 2</div>
        </Grid>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });


});
