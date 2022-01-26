import React from 'react';
import styled from 'styled-components/macro';
import {GridThemeProvider, Col, Row, Container, media} from 'imagine-react-styled-grid';


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
      lg: 15,
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


      <Test>ddd212</Test>
      <Test2>Test2</Test2>

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


const Test2 = styled(Row)`
color: blue;
  width: ${props => props.theme[themeName].gridGutterWidthMedia.lg ?? 100}px;
  background: blueviolet;

  ${media.lg`
    color: green;
  `}
`;

const Test = styled.div`
color: blue;
  ${media.lg`
    color: red;
  `}
`;

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
