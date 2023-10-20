import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import Col from '../src/GridSystem/Col';
import GridThemeProvider from '../src/GridThemeProvider';



describe('Col', () => {
    it('renders col-true', () => {
        const {container} = render(<Col col>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-auto', () => {
        const {container} = render(<Col col="auto">col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-6', () => {
        const {container} = render(<Col col={6}>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });
});
