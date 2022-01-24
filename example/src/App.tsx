import React from 'react';
import styled from 'styled-components/macro';
import {GridThemeProvider, Col, Row, Container} from '@imagine10255/react-styled-grid';


function App() {
  const defaultTheme = {
    gridGutterWidth: 10,
    gridColumns: 24,
    gridBreakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1920,
    },
    containerMaxWidths: {
      sm: 540,
      md: 720,
      lg: 960,
      xl: 1140,
      xxl: 1860,
    },
    gridGutterWidthMedia: {
      sm: 10,
      md: 10,
      lg: 10,
      xl: 10,
      xxl: 10,
    }
  };

  return (
    <GridThemeProvider gridTheme={defaultTheme}>
      <div className="bd-example-row">

          <Container>
            <Row>
              <Col sm md={8}>
                One of three columns
              </Col>
              <Col sm md={8}>
                One of three columns
              </Col>
              <Col sm md={8}>
                One of three columns
              </Col>
            </Row>
          </Container>
        </div>



        <Container>
          <NavRow>
            <NavCol col={8}>
              as (ul {'>'} li)
            </NavCol>
            <NavCol col={8}>
              as (ul {'>'} li)
            </NavCol>
            <NavCol col={8}>
              as (ul {'>'} li)
            </NavCol>
          </NavRow>
        </Container>
    </GridThemeProvider>
  );
}

export default App;


const NavRow = styled(Row).attrs(props  => ({
  'forwardAs': 'ul',
}))`
    background-color: chocolate;
`;

const NavCol = styled(Col).attrs(props  => ({
  'forwardAs': 'li',
}))`
    list-style: none;
    text-align: center;
    background-color: cornflowerblue;
 `;
