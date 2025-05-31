import styled, {createGlobalStyle} from 'styled-components';
import {Col} from '@acrool/react-grid';


const FlexOverflow = () => {

    return <HeroesRoot>

        <FixFlexBox>
            <Col col={12}>
                <ScrollWrapper>
                    <OverWrapper>
                    </OverWrapper>
                </ScrollWrapper>
            </Col>
            <Col col={12}>
                <TestButton>Test</TestButton>
            </Col>
        </FixFlexBox>


        <GlobalCSS/>
    </HeroesRoot>;
};

export default FlexOverflow;


const FixFlexBox = styled.div`
    //width:0;
    //flex:1;

    min-width: 0;
`;

const TestButton = styled.button`
    background-color: #274c94;
    display: flex;
    color: #fff;
    border-radius: 10px;
    width: 100%;
`;

const ScrollWrapper = styled.div`
    width: 100%;
    background-color: #3ee88d;
    overflow: scroll;
`;

const OverWrapper = styled.div`
    width: 1000px;
    height: 200px;
    background-color: #e83e8c;
`;



const HeroesRoot = styled.div`
    display: flex;
    min-width: 0;

`;



const GlobalCSS = createGlobalStyle`
    body{
        background: #fff;
        color: #000;
    }
`;
