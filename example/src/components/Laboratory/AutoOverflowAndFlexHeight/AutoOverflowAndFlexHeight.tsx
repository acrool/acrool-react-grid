import {Col, FCProps} from '@acrool/react-grid';
import styled, {createGlobalStyle} from 'styled-components';

interface IProps extends FCProps {

}

const AutoOverflowAndFlexHeight = ({
    className,
}: IProps) => {

    return <HeroesRoot className={className}>

        <Title>Auto Overflow and Flex Height</Title>
        <FixFlexBox>

        </FixFlexBox>


        <GlobalCSS/>
    </HeroesRoot>;
};

export default AutoOverflowAndFlexHeight;






const Desc1 = styled.div`
    background-color: rgba(255, 149, 199, 0.4);
    position: sticky;
    top: 10px;
`;

const Desc2 = styled.div`
    background-color: rgba(149, 174, 255, 0.4);


`;

const Title = styled.div`
    background-color: #2f7749;
    color: #fff;
    position: sticky;
    top: 0;
`;

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
    min-width: 0;
    background-color: #9d988a;
    min-height: 100vh;
    font-size: 40px;
`;



const GlobalCSS = createGlobalStyle`
    html{
        height: 100%;
    }
    body {
        background: #cecece;
        color: #000;
    }
`;
