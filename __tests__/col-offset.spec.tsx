import 'jest-styled-components';
import '@testing-library/dom';

import {render} from '@testing-library/react';
import React from 'react';

import Col from '../src/GridSystem/Col';
import GridThemeProvider from '../src/GridThemeProvider';

describe('Col Offset', () => {
    it('renders col-offset-3', () => {
        const {container} = render(<Col col={{span: 6, offset: 3}}>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders col-md-offset-2', () => {
        const {container} = render(<Col col md={{span: 6, offset: 4}}>col</Col>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

});
