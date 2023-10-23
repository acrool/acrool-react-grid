import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import Col from '../src/GridSystem/Col';
import GridThemeProvider from '../src/GridThemeProvider';

describe('Col Md', () => {
    it('renders col-md-true', () => {
        const {container} = render(<Col md>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-md-auto', () => {
        const {container} = render(<Col md="auto">col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-md-6', () => {
        const {container} = render(<Col md={6}>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });
});
