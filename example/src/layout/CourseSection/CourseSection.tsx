import styled from 'styled-components';
import React from 'react';
import {Container, Grid, GridCol} from 'bear-react-grid';
import MyLink from '@/layout/CourseSection/_components/MyLink';

interface IProps extends FCProps {
    className?: string;
}

const CourseSection = ({
    className,
}: IProps) => {

    const platFormLogos = [
        {text: 'swiftui', imageUrl: 'https://designcode.io/images/logos/swiftui-logo.svg'},
        {text: 'react', imageUrl: 'https://designcode.io/images/logos/react-logo.svg'},
        {text: 'figma', imageUrl: 'https://designcode.io/images/logos/figma-logo.svg'},
        {text: 'sketch', imageUrl: 'https://designcode.io/images/logos/sketch-logo.svg'},
        {text: 'webflow', imageUrl: 'https://designcode.io/images/logos/webflow-logo.svg'},
    ];

    const renderHeader = () => {
        return  <Wrapper columns={{
            xs: 'repeat(1,1fr)',
            lg: '700px auto',
        }}
        className="mb-4"
        >
            <Grid columns={1}>
                <Caption>300 HOURS OF COURSES</Caption>
                <Title>
                    Learn the best tools and platforms
                </Title>
                <Description>
                    We focus on industry leading platforms so that you can be prepared for your next job. Then we teach
                    all we can about them.
                </Description>
            </Grid>

            <Grid className="justify-content-end">
                {platFormLogos.map(row => {
                    return <PlatformLogo key={row.text} src={row.imageUrl} alt={row.text}/>;
                })}
            </Grid>
        </Wrapper>;
    };


    return <CourseSectionRoot>
        {renderHeader()}

        <Grid columns={2} gap="20px">

            {Array.from({length: 2}).map((row, index) => {

                return <CourseDetailCard gap="20px" key={`card_${index}`}>

                    <CurriculumWrapper columns={1}>
                        <CourseDetailCardTitle>FEATURED COURSE</CourseDetailCardTitle>
                        <MyLinkList>
                            {Array.from({length: 5}).map((row, index) => {
                                return <MyLink key={`link_${index}`} no={index+1}/>
                            })}
                        </MyLinkList>
                    </CurriculumWrapper>


                    <CardWrapper columns={1} className="align-content-center">
                        <CardWrapperImage
                            src="https://images.ctfassets.net/ooa29xqb8tix/5jIBVIWEq7QQq1Tm03ViNR/b34fad96046114968b74016a678ac841/ios17-2.png?w=400&q=50"
                            alt="Build SwiftUI Apps for iOS 17 icon"
                        />
                        <ContentTitle>Build SwiftUI Apps for iOS 17</ContentTitle>
                        <ContentSubTitle>16 videos - 4 hours</ContentSubTitle>
                        <StarImage src="https://designcode.io/images/icons/star.svg"/>
                    </CardWrapper>

                </CourseDetailCard>;
            })}


        </Grid>
    </CourseSectionRoot>;
};

export default CourseSection;



const StarImage = styled.img`
  width: 24px;
  height: 24px;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  position: relative;
  width: 74px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 10px auto 0px;
`;

const ContentSubTitle = styled.p`

  font-weight: normal;
  font-size: 15px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin: 10px 0px 0px;
  color: rgba(255, 255, 255, 0.7);
`;


const ContentTitle = styled.p`


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

const ContentWrapper = styled.div`
`;


const CardWrapperImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: 150px;

  // opacity: 0;
  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;


const CardWrapper = styled(Grid)`
  position: relative;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(209.21deg, rgb(32, 25, 76) 13.57%, rgb(46, 42, 59) 98.38%);
  box-shadow: rgba(46, 42, 59, 0.3) 0px 20px 40px, rgba(0, 0, 0, 0.05) 0px 1px 3px;


    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

    :hover{
        transform: scale(1.1);
    }

`;



const MyLinkList = styled.div`
  height: 100%;
  overflow: auto;

  mask-image: linear-gradient(rgb(255, 255, 255) 80%, rgba(255, 255, 255, 0) 100%);
`;



const CourseDetailCardTitle = styled.p`
  font-size: 13px;
  font-weight: 600;

  color: rgba(255, 255, 255, 0.7);
`;

const CurriculumWrapper = styled(Grid)`
  width: 287px;
  overflow: hidden;

`;

const CourseDetailCard = styled(Grid)`
    position: relative;
    //display: grid;
    //grid-template-columns: auto auto;
    //column-gap: 20px;
    //width: 586px;
    height: 400px;
    padding: 20px;
    border-radius: 20px;

    background: rgba(15, 14, 71, 0.3);
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 0.5px inset;

`;


const PlatformLogo = styled.img`
  width: 44px;
  height: 44px;
  margin: 0px;
  opacity: 1;
  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;



const Description = styled.p`

  font-weight: normal;
  font-size: 17px;

  color: rgb(255, 255, 255);
`;

const Title = styled.h2`

  font-weight: bold;
  font-size: 40px;
  color: rgb(255, 255, 255);
`;

const Caption = styled.p`

  font-weight: 600;
  font-size: 15px;
  margin: initial;
`;


const Wrapper = styled(Grid)`
  position: relative;
  //display: grid;
  //grid-template-columns: 380px auto;
  //column-gap: 80px;
  margin: 0 auto;
  align-items: flex-end;
  pointer-events: none;
`;

const CourseSectionRoot = styled(Container)`
  position: relative;
  padding-top: 85px;
  height: 1222px;
`;
