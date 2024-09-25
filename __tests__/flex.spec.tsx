import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import GridThemeProvider from '../src/GridThemeProvider';
import Flex from '../src/CSSGrid/Flex';

describe('Flex', () => {
    it('renders flex', () => {
        const {container} = render(<Flex>flex</Flex>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });
    it('renders flex column', () => {
        const {container} = render(<Flex column>flex</Flex>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });
    it('renders flex row', () => {
        const {container} = render(<Flex col="row">flex</Flex>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders flex column + md row', () => {
        const {container} = render(<Flex column md="row">flex</Flex>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

});
