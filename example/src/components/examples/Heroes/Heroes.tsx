import styled, {createGlobalStyle} from 'styled-components';
import Button from '../../atoms/Button';
import {Col, Container, Grid, Row, auto} from '@acrool/react-grid';


const Heroes = () => {



    const renderRowSub = () => {
        return  <div>


            <Container fluid>
                <Row>
                    <Col col={6}>
                        <p className="mb-8">
                        Quickly design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                        </p>
                    </Col>
                    <Col col={6} >
                        <p className="mb-8">
                        Quickly design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/*<Flex className="gap-2">*/}
            {/*    <Col col={2} className="mx-auto p-0">*/}
            {/*        <p className="mb-8">*/}
            {/*            Quickly design and customize responsive mobile-first sites with Bootstrap,*/}
            {/*            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,*/}
            {/*            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*    <Col col={5} className="mx-auto p-0">*/}
            {/*        <p className="mb-8">*/}
            {/*            Quickly design and customize responsive mobile-first sites with Bootstrap,*/}
            {/*            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,*/}
            {/*            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*    <Col col={5} className="mx-auto p-0">*/}
            {/*        <p className="mb-8">*/}
            {/*            Quickly design and customize responsive mobile-first sites with Bootstrap,*/}
            {/*            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,*/}
            {/*            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*    <Col col={5} className="mx-auto p-0">*/}
            {/*        <p className="mb-8">*/}
            {/*            Quickly design and customize responsive mobile-first sites with Bootstrap,*/}
            {/*            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,*/}
            {/*            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*</Flex>*/}

        </div>;
    };

    const renderHero = () => {
        return  <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-8" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72"
                height="57"/>
            <h1 className="mb-9">Centered hero</h1>
            <Col lg={6} className="mx-auto">
                <p className="mb-8">Quickly design and customize responsive mobile-first sites with Bootstrap,
                    the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                <Grid col={1} sm={auto(2)} className="g-3 justify-content-center">
                    <Button>Primary button</Button>
                    <Button>Secondary</Button>
                </Grid>
            </Col>
        </div>;
    };

    const renderScreenshot = () => {
        return <div className="px-4 pt-5 my-5 text-center">
            <h1>Centered screenshot</h1>
            <Col lg={6} className="mx-auto">
                <p className="mb-8">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                    world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive
                    grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <Grid col={1}  sm={auto(2)} className="gap-3 justify-content-center mb-9">
                    <Button >Primary button</Button>
                    <Button>Secondary</Button>
                </Grid>
            </Col>
            <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                <Container className="px-5">
                    <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png" className="img-fluid mb-8"
                        alt="Example image" width="700" height="500" loading="lazy"/>
                </Container>
            </div>
        </div>;
    };



    const renderResponsive = () => {
        return <Container className="px-4 py-5">
            <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                <Col col={10} sm={8} lg={6}>
                    <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png"
                        className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                        width="700" height="500" loading="lazy"/>
                </Col>
                <Col lg={6}>
                    <h1 className="mb-3">
                        Responsive left-aligned hero with image
                    </h1>
                    <p>
                        Quickly design and customize responsive mobile-first sites with Bootstrap, the
                        world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                    </p>

                    <Grid col={1}  sm={auto(2)} className="gap-3 justify-content-start">
                        <Button>Primary button</Button>
                        <Button>Secondary</Button>
                    </Grid>
                </Col>
            </Row>

        </Container>;
    };



    const renderSignUp = () => {
        return <Container className="px-4 py-5">
            <Row className="align-items-center g-lg-5 py-5">
                <Col col={12} lg={7} className="text-center text-lg-left">
                    <h1 className="mb-3">Vertically centered hero sign-up form</h1>
                    <Col lg={10}>
                        <p className="fs-4">Below is an example form built entirely with Bootstrap’s form controls.
                          Each required form group has a validation state that can be triggered by attempting to submit the
                          form without completing it.</p>
                    </Col>
                </Col>
                <Col md={10} lg={5} className="mx-auto">
                    <form className="p-4 p-md-5 border rounded-3">
                        <div className="mb-3">
                            <input type="email" id="floatingInput"
                                placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="mb-3">
                            <input type="password" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <Button className="w-100">Sign up</Button>
                        <hr className="my-4"/>
                        <small>By clicking Sign up, you agree to the terms of
                              use.</small>
                    </form>
                </Col>
            </Row>
        </Container>;
    };


    const renderBorder = () => {
        return <Container className="my-5">
            <Row className="p-4 pb-0 pr-lg-0 pt-lg-5 align-items-center rounded-3 border">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                    <h1>Border hero with cropped image and shadows</h1>
                    <p className="mb-9">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                      world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                      responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                    <Grid col={1}  md={auto(2)} className="gap-3 justify-content-md-start mb-8 mb-lg-3">
                        <Button className="px-4">Primary</Button>
                        <Button className="px-4">Default</Button>
                    </Grid>
                </Col>
                <Col lg={4} className="offset-lg-1 p-0 overflow-hidden">
                    <img className="rounded-lg-3" src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png" alt="" width="720"/>
                </Col>
            </Row>
        </Container>;
    };


    const renderDark = () => {
        return <div className="px-4 py-5 text-center">
            <div className="py-5">
                <h1>Dark color hero</h1>
                <Col col={12} md={8} lg={6} className="mx-auto">
                    <p className="mb-8">Quickly1 design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <Grid col={1} sm={auto(2)} className="gap-3 justify-content-sm-center">
                        <Button className="px-4">Primary</Button>
                        <Button className="px-4">Default</Button>
                    </Grid>
                </Col>
            </div>
        </div>;
    };


    return <HeroesRoot>

        {renderRowSub()}
        {renderHero()}
        {renderScreenshot()}
        {renderResponsive()}
        {renderSignUp()}
        {renderBorder()}
        {renderDark()}

        <GlobalCSS/>
    </HeroesRoot>;
};

export default Heroes;





const HeroesRoot = styled.div`

`;



const GlobalCSS = createGlobalStyle`

    :root{
        --bs-btn-color: #fff;
        --bs-btn-bg: #0d6efd;
        --bs-btn-border-color: #0d6efd;
        --bs-btn-hover-color: #fff;
        --bs-btn-hover-bg: #0b5ed7;
        --bs-btn-hover-border-color: #0a58ca;
        --bs-btn-focus-shadow-rgb: 49,132,253;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: #0a58ca;
        --bs-btn-active-border-color: #0a53be;
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #fff;
        --bs-btn-disabled-bg: #0d6efd;
        --bs-btn-disabled-border-color: #0d6efd;


        //--acrool-container-max-width-sm: 400px;
        //--acrool-container-max-width-md: 400px;
        //--acrool-container-max-width-lg: 400px;
        //--acrool-container-max-width-xl: 400px;
        //--acrool-container-max-width-xxl: 400px;
    }

    body{
        background: #212529;
        color: #fff;
    }
`;
