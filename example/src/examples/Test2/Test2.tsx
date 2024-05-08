import styled, {createGlobalStyle} from 'styled-components';
import Button from '@/components/Button';
import {Col, Container, Grid, Row, auto} from 'bear-react-grid';

interface IProps extends FCProps {

}

const Test2 = ({
    className,
}: IProps) => {


    return <Container fluid>
        <Row>
            <Col col={6}>
                qweqwe
                {/*<ScrollWrapper>*/}
                {/*    <OverWrapper>*/}
                {/*    </OverWrapper>*/}
                {/*</ScrollWrapper>*/}
            </Col>
            <Col col={6}>
                qweqwe
                {/*<ScrollWrapper>*/}
                {/*    <OverWrapper>*/}
                {/*    </OverWrapper>*/}
                {/*</ScrollWrapper>*/}
            </Col>
            <Col col={12}>
                <TestButton>Test</TestButton>
            </Col>
        </Row>
    </Container>;

};

export default Test2;



const TestButton = styled.button`
    background-color: #274c94;
    display: flex;
    color: #fff;
    border-radius: 10px;
    width: 100%;
`;

const GlobalCSS = createGlobalStyle`
    body{
        background: #fff;
        color: #000;
    }
`;
