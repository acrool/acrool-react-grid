import React from 'react';
import 'jest-styled-components';
import {render} from '@testing-library/react';
import '@testing-library/dom';
import GridThemeProvider from '../src/GridThemeProvider';
import Row from '../src/GridSystem/Row';

describe('Row', () => {
    it('renders row', () => {
        const {container} = render(<Row>row</Row>, {wrapper: GridThemeProvider});
        expect(container.firstChild).toMatchSnapshot();
    });

});
