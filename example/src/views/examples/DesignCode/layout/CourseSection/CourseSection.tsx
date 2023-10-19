import styled from 'styled-components';
import React from 'react';
import {Container, Grid, GridCol, media} from 'bear-react-grid';
import PreviewCard from '@/views/examples/DesignCode/layout/CourseSection/_components/PreviewCard';
import CourseButton from '@/views/examples/DesignCode/layout/_components/CourseButton';
import CourseCard from '../_components/CourseCard';

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
        return  <Grid columns={{xs: 1, xl: 2}}
            className="align-items-end justify-items-center justify-content-xl-between mb-4"
        >
            <Info columns={1} className="mb-4 mb-xl-0 text-center text-xl-left">
                <Caption>300 HOURS OF COURSES</Caption>
                <Title>
                    Learn the best tools and platforms
                </Title>
                <Description>
                    We focus on industry leading platforms so that you can be prepared for your next job. Then we teach
                    all we can about them.
                </Description>
            </Info>

            <Grid>
                {platFormLogos.map(row => {
                    return <PlatformLogo key={row.text} src={row.imageUrl} alt={row.text}/>;
                })}
            </Grid>
        </Grid>;
    };


    return <CourseSectionRoot className={className}>
        <Container>
            {renderHeader()}
        </Container>

        <Container className="overflow-x-auto overflow-x-xl-initial">
            <Grid columns={2} gap="20px">

                {Array.from({length: 2}).map((row, index) => {
                    return <CourseCard key={`card_${index}`}/>;
                })}
            </Grid>
        </Container>

        <Container className="overflow-x-auto overflow-x-xl-initial">
            <Grid columns={5} className="mb-4">
                {Array.from({length: 5}).map((row, index) => {
                    return <PreviewCard key={`preview_${index}`}/>;
                })}
            </Grid>
        </Container>

        <Container>
            <div className="d-flex justify-content-center mx-auto">
                <CourseButton isOutline href="/">
                    <img src="https://designcode.io/images/icons/courses.svg" alt="cc"/>
                    <span>Browse courses</span>
                </CourseButton>
            </div>
        </Container>
    </CourseSectionRoot>;
};

export default CourseSection;






const PlatformLogo = styled.img`
  width: 44px;
  height: 44px;
  opacity: 1;
  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;



const Description = styled.p`

  font-weight: normal;
  font-size: 17px;
`;

const Title = styled.h2`

  font-weight: 800;
  font-size: 40px;
`;

const Caption = styled.p`
  font-weight: 600;
  font-size: 15px;

`;

const Info = styled(Grid)`
    max-width: 700px;
`;


const CourseSectionRoot = styled.div`
`;
