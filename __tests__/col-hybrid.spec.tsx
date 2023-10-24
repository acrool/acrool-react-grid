import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import Col from '../src/GridSystem/Col';
import GridThemeProvider from '../src/GridThemeProvider';



describe('Col Hybrid ', () => {
    it('renders col + col-lg-2', () => {
        const {container} = render(<Col col lg={2}>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-auto + col-md-auto', () => {
        const {container} = render(<Col col="auto" md="auto">col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-4 + col-md-6', () => {
        const {container} = render(<Col col={4} md={6}>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });
});
