import styled, {createGlobalStyle} from 'styled-components';
import Button from '@/components/Button';
import {Col, Container, Grid, Row} from 'bear-react-grid';
import {auto} from '../../../../src/utils';

interface IProps extends FCProps {

}

const Heroes = ({
    className,
}: IProps) => {



    const renderHero = () => {
        return  <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72"
                height="57"/>
            <h1>Centered hero</h1>
            <Col lg={6} className="mx-auto">
                <p className="mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap,
                    the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                <Grid columns={{sm: auto(2)}} className="gap-2 justify-content-center">
                    <Button className="gap-3">Primary button</Button>
                    <Button>Secondary</Button>
                </Grid>
            </Col>
        </div>;
    };

    const renderScreenshot = () => {
        return <div className="px-4 pt-5 my-5 text-center">
            <h1>Centered screenshot</h1>
            <Col lg={6} className="mx-auto">
                <p className="mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                    world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive
                    grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <Grid columns={{sm: auto(2)}} className="gap-2 justify-content-center mb-5">
                    <Button className="gap-3">Primary button</Button>
                    <Button>Secondary</Button>
                </Grid>
            </Col>
            <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                <Container className="px-5">
                    <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png" className="img-fluid mb-4"
                        alt="Example image" width="700" height="500" loading="lazy"/>
                </Container>
            </div>
        </div>;
    };



    const renderResponsive = () => {
        return <Container xxl={8} className="px-4 py-5">
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

                    <Grid columns={{md: auto(2)}} className="gap-2 justify-content-start">
                        <Button className="gap-3">Primary button</Button>
                        <Button>Secondary</Button>
                    </Grid>
                </Col>
            </Row>

        </Container>;
    };



    const renderSignUp = () => {
        return <Container xl={10} xxl={8} className="px-4 py-5">
            <Row className="align-items-center g-lg-5 py-5">
                <Col lg={7} className="text-center text-lg-start">
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
                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the
                      world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                      responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                    <Grid columns={{md: auto(2)}} className="gap-2 justify-content-md-start mb-4 mb-lg-3">
                        <Button className="px-4 me-md-2">Primary</Button>
                        <Button className="px-4">Default</Button>
                    </Grid>
                </Col>
                <Col lg={4} className="offset-lg-1 p-0 overflow-hidden">
                    <img className="rounded-lg-3" src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png" alt="" width="720"/>
                </Col>
            </Row>
        </Container>;
    };



    return <HeroesRoot className={className}>

        {renderHero()}
        {renderScreenshot()}
        {renderResponsive()}
        {renderSignUp()}
        {renderBorder()}

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
    }

    body{
        background: #212529;
        color: #fff;
    }
`;
