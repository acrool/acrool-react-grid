import {Route, Routes, Router, BrowserRouter} from 'react-router-dom';
import DesignCode from '@/views/examples/DesignCode';
import React from 'react';
import Menu from '@/views/Menu';

const pageRoutes = () => {
    return <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="designCode" element={<DesignCode/>}/>
    </Routes>;
};


const MainRouter = () => {
    const content = <BrowserRouter basename="/">
        {pageRoutes()}
    </BrowserRouter>;

    return <>
        {content}
        {/*<SvgSymbol/>*/}
    </>;
};


export default MainRouter;
