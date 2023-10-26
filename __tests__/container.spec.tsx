import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import GridThemeProvider from '../src/GridThemeProvider';
import Container from '../src/GridSystem/Container';



describe('Container', () => {
    it('renders container', () => {
        const {container} = render(<Container>container</Container>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders container fluid', () => {
        const {container} = render(<Container fluid>container fluid</Container>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders container fluid="md"', () => {
        const {container} = render(<Container fluid="md">container-md</Container>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders container fluid="lg"', () => {
        const {container} = render(<Container fluid="lg">container-lg</Container>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });
});
