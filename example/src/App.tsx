import React from 'react';
import styled from 'styled-components';
import {GridThemeProvider, Col, Row, Container, Grid, GridCol, media, TGridTheme} from 'bear-react-grid';

import './index.css';
import 'bear-react-grid/dist/index.css';


function App() {
    const defaultTheme: TGridTheme = {
        gridColumns: 24,
        gridGutterWidth: '0.625rem',
        gridBreakpoints: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1540,
        },
        containerMaxWidths: {
            sm: 540,
            md: 720,
            lg: 960,
            xl: 1140,
            xxl: 1540,
        },
        gridGutterWidthMedia: {
            sm: '0.625rem',
            md: '0.625rem',
            lg: '0.625rem',
            xl: '0.625rem',
            xxl: '0.625rem',
        }
    };

    /**
     * Nav
     */
    const renderNav = () => {
        return <Nav className="mb-5">
            <Container fluid className="d-flex d-md-">
                <NavbarBrand>Bear React Grid</NavbarBrand>

                <NavbarNav className="ml-auto my-0 d-none d-md-flex">
                    <NavItem>
                        <NavLink href="#!" isActive>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#!">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#!">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#!">Services</NavLink>
                    </NavItem>

                </NavbarNav>
            </Container>
        </Nav>;
    };


    /**
     * Header
     */
    const renderHeader = () => {
        return <Container>
            <Row>
                <Col lg={14}>
                    <img className="img-fluid mb-4 mb-lg-0 round" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="sample-img"/>
                </Col>
                <Col lg={10} className="gap-row-2">
                    <Title>Business Name or Tagline</Title>
                    <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    <a href="#!">Call to Action!</a>

                    <StyledCol className="mt-3">Test Styled(Col)</StyledCol>
                </Col>
            </Row>

        </Container>;
    };

    /**
     * News
     */
    const renderNews = () => {
        return <Container>

            <NewCard className="my-5 py-4 text-center">
                <CardBody>
                    <p>This call to action card is a great place to showcase some important information or display a clever tagline!
                    </p>
                    <p>https://startBootstrap.github.io/startBootstrap-small-business/
                    </p>

                </CardBody>
            </NewCard>

        </Container>;
    };


    /**
     * Card List
     */
    const renderCardList = () => {
        const texts = [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.,',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        ];

        return (<Container>
            <Row noGutters>
                <Col key={'card'}
                    col="auto"
                    className="la"
                >
                    <Card className="h-100">
                        <Grid
                            // columns="1fr auto"
                            // columns={2}
                            columns={{xs: '1fr auto', md: 3}}
                            gap="50px 30px"
                            vertical="center"
                            horizontal="center"
                        >
                            <div>test</div>
                            <div>test2</div>
                            {/*<GridCol col={6}>Col-6</GridCol>*/}
                            {/*<GridCol col={6}>Col-6</GridCol>*/}
                        </Grid>

                    </Card>
                </Col>
            </Row>
            <Row className="g-0">
                {texts.map((text, index) => {
                    return <Col key={`card_${index}`}
                        className="mb-5"
                        col={24}
                        md
                        lg={10}

                    >
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle className="mb-md-5">teCard One</CardTitle>
                                <CardText>{text}</CardText>
                            </CardBody>
                            <CardFooter>
                                <a href="#!">More Info</a>
                            </CardFooter>
                        </Card>
                    </Col>;
                })}
            </Row>
        </Container>);

    };


    /**
     * Footer
     */
    const renderFooter = () => {
        return <Footer className="py-5">
            <Container className="px-4 px-lg-5"><p className="m-0 text-center">Copyright © Your Website 2022</p></Container>
        </Footer>;
    };


    return (
        <GridThemeProvider gridTheme={defaultTheme}>
            {renderNav()}
            {renderHeader()}
            {renderNews()}
            {renderCardList()}
            {renderFooter()}
        </GridThemeProvider>
    );
}

export default App;


const StyledCol =styled(Col)`
  border: dotted 1px #bdbdbd;
`;


const Footer = styled.footer`
  background-color: rgb(33, 37, 41);
  color: #97e4ff;

  ${media.md`
      color: #fff;
  `}



`;

const CardFooter = styled.div`
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

const CardText = styled.p`

`;

const CardTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 0.5rem;
`;

const CardBody = styled.div`
    flex: 1 1 auto;
    padding: 1rem 1rem;
`;

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
`;

const NewCard = styled(Card)`
  background-color: rgb(108, 117, 125);
  color: #fff;
`;

const Title = styled.h1`
    font-size: 2.5rem;
`;


const NavLink = styled.a<{
    isActive?: boolean
}>`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  color: ${props => props.isActive ? '#fff' : 'rgba(255, 255, 255, 0.55)'};

`;

const NavItem = styled.li`
  list-style: none;
`;

const NavbarNav = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const NavbarBrand = styled.div`
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;

    color: #fff;
`;


const Nav = styled.nav`
    background-color: rgb(33, 37, 41);
    color: #fff;

    //flex-wrap: nowrap;
    //justify-content: flex-start;

    //position: relative;
    //display: flex;
    //align-items: center;
    //padding-top: 0.5rem;
    //padding-bottom: 0.5rem;

`;
