import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import Col from './Col';
import GridThemeProvider from '../../GridThemeProvider';

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

describe('Md', () => {
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


describe('Hybrid ', () => {
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
