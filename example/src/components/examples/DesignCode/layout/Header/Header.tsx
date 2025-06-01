import {Container, FCProps, Flex} from '@acrool/react-grid';
import React from 'react';
import styled from 'styled-components';

import Button from './_components/Button';

interface IProps extends FCProps {
    className?: string
}

const Header = ({
    className,
}: IProps) => {

    const renderMockups = () => {
        return <Mockups>
            <Mockup1>
                <Mockup1Img src="/static/examples/design_code/images/mockups/mockup-card2.svg"/>
            </Mockup1>
            <Mockup2>
                <Mockup2Img src="/static/examples/design_code/images/mockups/mockup-card2.svg"/>
            </Mockup2>
            <MockupContent>
                <MockupContentImg src="/static/examples/design_code/images/mockups/mockup-content.svg"/>
            </MockupContent>

            <Mockup4>
                <Mockup4Img src="/static/examples/design_code/images/mockups/mockup2-bg.svg"/>
            </Mockup4>
            <Mockup5>
                <Mockup5Img src="/static/examples/design_code/images/mockups/mockup3-bg.svg"/>
            </Mockup5>

        </Mockups>;
    };


    const renderTextWrapper = () => {
        return <Flex className="flex-column gap-4">
            <Title>
                Design
                <div>and code</div>
                <span>React</span>apps
            </Title>

            <SubTitle>
                Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses
                about the best tools.
            </SubTitle>


            <Button/>

            <P>Purchase includes access to 50+ courses, 320+ premium tutorials, 300+ hours of videos, source files and
                certificates.</P>
        </Flex>;
    };


    return <HeaderRoot className={className}>
        <Flex className="justify-content-between">
            {/*{renderAnimationWrapper()}*/}
            {renderTextWrapper()}
            {renderMockups()}
        </Flex>
    </HeaderRoot>;
};

export default Header;


const Mockup5Img = styled.img`
  width: 414px;
  height: 273px;

  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;

const Mockup5 = styled.div`
  background: rgba(23, 12, 61, 0.2);
  width: 414px;
  height: 273px;
  border-radius: 10px;
  position: absolute;
  top: 250px;
  left: 410px;
  backdrop-filter: blur(10px);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
`;

const Mockup4Img = styled.img`
  width: 400px;
  height: 273px;

  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;

const Mockup4 = styled.div`
  background: rgba(23, 12, 61, 0.2);
  width: 400px;
  height: 273px;
  border-radius: 10px;
  position: absolute;
  top: 220px;
  left: 77px;
  backdrop-filter: blur(10px);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
`;

const MockupContentImg = styled.img`
  width: 701px;
  height: 428px;

  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;

const MockupContent = styled.div`
  background: rgba(23, 12, 61, 0.3);
  width: 701px;
  height: 428px;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  left: 37px;
  backdrop-filter: blur(10px);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
`;

const Mockup2Img = styled.img`
  width: 183px;
  height: 120px;

  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;

const Mockup2 = styled.div`
  background: linear-gradient(192.64deg, rgb(67, 22, 219) 12.72%, rgb(144, 118, 231) 54.49%, rgb(162, 238, 255) 100.01%);
  width: 183px;
  height: 120px;
  position: absolute;
  top: 0;
  left: 211px;
  border-radius: 10px;
`;


const Mockup1Img = styled.img`
  width: 183px;
  height: 120px;

  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;

const Mockup1 = styled.div`
  background: radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0%, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%);
  width: 183px;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
`;


const Mockups = styled.div`
  position: relative;
  width: 825px;
`;


const P = styled.p`

  font-weight: normal;
  font-size: 13px;
  margin: 0;
  max-width: 280px;
`;


const SubTitle = styled.div`

  font-weight: normal;
  font-size: 17px;
  margin: 0;
  max-width: 300px;
  color: black !important;
`;


const Title = styled.h1`
  word-wrap: break-word;
  color: rgb(255, 255, 255);
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 700;
    font-size: 60px;
  background: linear-gradient(rgb(115, 0, 64) 0%, rgb(48, 28, 190) 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

 > div{
     font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
     font-weight: 700;
     font-size: 60px;
 }

  > span{
    margin: 0 5px;
    color: rgb(255, 255, 255);
    background: linear-gradient(rgb(255, 215, 255) 0%, rgb(255, 182, 255) 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;




const HeaderRoot = styled(Container)`
`;

