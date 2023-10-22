import styled, {createGlobalStyle} from 'styled-components';
import Button from '@/components/Button';
import {Col, Container, Grid, Row, auto} from 'bear-react-grid';

interface IProps extends FCProps {

}

const Features = ({
    className,
}: IProps) => {


    const renderColumnIcons = () => {
        return <Container className="px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Columns with icons</h2>
            <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
                <Col col className="feature">
                    <div
                        className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        {/*<svg className="bi" width="1em" height="1em">*/}
                        {/*    <use xlink:href="#collection"></use>*/}
                        {/*</svg>*/}
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                        sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        {/*<svg className="bi">*/}
                        {/*    <use xlink:href="#chevron-right"></use>*/}
                        {/*</svg>*/}
                    </a>
                </Col>
                <Col col className="feature">
                    <div
                        className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        {/*<svg className="bi" width="1em" height="1em">*/}
                        {/*    <use xlink:href="#people-circle"></use>*/}
                        {/*</svg>*/}
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                        sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        {/*<svg className="bi">*/}
                        {/*    <use xlink:href="#chevron-right"></use>*/}
                        {/*</svg>*/}
                    </a>
                </Col>
                <Col col className="feature">
                    <div
                        className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        {/*<svg className="bi" width="1em" height="1em">*/}
                        {/*    <use xlink:href="#toggles2"></use>*/}
                        {/*</svg>*/}
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                        sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        {/*<svg className="bi">*/}
                        {/*    <use xlink:href="#chevron-right"></use>*/}
                        {/*</svg>*/}
                    </a>
                </Col>
            </Row>
        </Container>;
    };


    return <FeaturesRoot className={className}>

        {renderColumnIcons()}


        <GlobalCSS/>
    </FeaturesRoot>;
};

export default Features;





const FeaturesRoot = styled.div`

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
