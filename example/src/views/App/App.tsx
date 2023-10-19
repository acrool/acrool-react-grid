import {GridThemeProvider} from 'bear-react-grid';
import React from 'react';

import gridTheme from '@/config/gridTheme';

import MainRouter from './MainRouter';

import '../../index.css';
import 'bear-react-grid/dist/index.css';



const App = () => {
    return (
        <GridThemeProvider gridTheme={gridTheme}>
            <MainRouter/>
        </GridThemeProvider>
    );
};

export default App;
