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

export default function App() {



    return <GridThemeProvider gridTheme={{}}>
        <Wrapper>
            <Navbar/>
            <WaveWrapper/>
            <Header/>

            <Container>
                <Grid>
                    <GridCol>
                        {/*<LogoSvg width={100}/>*/}
                    </GridCol>
                </Grid>
            </Container>
        </Wrapper>

        <CourseSection/>


    </GridThemeProvider>


}




const Wrapper = styled.div`
    height: 890px;
    background: linear-gradient(189.16deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%);
    position: relative;
    overflow: hidden;
    padding-top: 20px;
`;
