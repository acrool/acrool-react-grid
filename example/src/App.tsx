import React from 'react';
import LogoSvg from '@site/static/img/logo-home.svg';

import styles from './index.module.css';
import {Container, Col, Row, GridThemeProvider, Grid, GridCol} from 'bear-react-grid';
import styled from 'styled-components';
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import WaveWrapper from './layout/WaveWrapper';
import CourseSection from './layout/CourseSection';

import './index.css';
import 'bear-react-grid/dist/index.css';
import gridTheme from '@/config/grid';

export default function App() {



    return <GridThemeProvider gridTheme={gridTheme}>
        <Wrapper>
            <Navbar/>
            <WaveWrapper/>
            <Header/>
        </Wrapper>

        <CourseSection/>


    </GridThemeProvider>;

}




const Wrapper = styled.div`
    height: 890px;
    position: relative;
    padding-top: 50px;

    :before{
        content: '';
        background: linear-gradient(189.16deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: -2;
        height: 100%;
    }
`;
