import {FCProps, Flex, media} from '@acrool/react-grid';
import React from 'react';
import styled from 'styled-components';

interface IProps extends FCProps {
   className?: string
}

const PreviewCard = ({
    className,
}: IProps) => {
    return <PreviewCardRoot className={className} column>
        <CardWrapperImage
            src="/static/examples/design_code/ios17-2.png?w=400&q=50"
            alt="Build SwiftUI Apps for iOS 17 icon"
        />
        <Title>Build SwiftUI Apps for iOS 17</Title>
        <SubTitle>16 videos - 4 hours</SubTitle>
        <StarImage src="/static/examples/design_code/images/icons/star.svg"/>
    </PreviewCardRoot>;
};

export default PreviewCard;




const StarImage = styled.img`
  width: 24px;
  height: 24px;
  margin: auto;
`;

const SubTitle = styled.p`

    font-size: 15px;
    text-align: center;
    margin: 10px 0 0;
`;


const Title = styled.p`


  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: rgb(255, 255, 255);
`;

const CardWrapperImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: 150px;
    margin: auto;

  // opacity: 0;
  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;

const PreviewCardRoot = styled(Flex)`
    position: relative;
    height: 360px;
    width: 200px;
    border-radius: 20px;
    background: linear-gradient(209.21deg, rgb(32, 25, 76) 13.57%, rgb(46, 42, 59) 98.38%);
    box-shadow: rgba(46, 42, 59, 0.3) 0px 20px 40px, rgba(0, 0, 0, 0.05) 0px 1px 3px;

    justify-items: center;
    align-content: center;


    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

    &:hover{
        transform: scale(1.1);
    }

    ${media.xl`
        width: auto;
    `}
`;
