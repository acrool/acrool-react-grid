import {Col, Container, FCProps,Flex, Grid} from '@acrool/react-grid';
import React from 'react';
import styled from 'styled-components';

import CourseButton from '../_components/CourseButton';
import CourseCard from '../_components/CourseCard';
import PreviewCard from './_components/PreviewCard';

interface IProps extends FCProps {
    className?: string
}

const CourseSection = ({
    className,
}: IProps) => {

    const platFormLogos = [
        {text: 'swiftui', imageUrl: '/static/examples/design_code/images/logos/swiftui-logo.svg'},
        {text: 'react', imageUrl: '/static/examples/design_code/images/logos/react-logo.svg'},
        {text: 'figma', imageUrl: '/static/examples/design_code/images/logos/figma-logo.svg'},
        {text: 'sketch', imageUrl: '/static/examples/design_code/images/logos/sketch-logo.svg'},
        {text: 'webflow', imageUrl: '/static/examples/design_code/images/logos/webflow-logo.svg'},
    ];

    const renderHeader = () => {
        return  <Grid col={1} xl={2} className="align-items-end justify-items-center mb-8 gy-3">
            <Col col={10} md={12} className="d-flex flex-column mb-xl-0 text-center text-xl-left gap-3">
                <Caption>300 HOURS OF COURSES</Caption>
                <Title>
                    Learn the best tools and platforms
                </Title>
                <Description>
                    We focus on industry leading platforms so that you can be prepared for your next job. Then we teach
                    all we can about them.
                </Description>
            </Col>

            <Grid col={5} className="justify-self-xl-end">
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

        <div className="overflow-x-auto overflow-x-xl-initial mx-auto mb-8">
            <Container>
                <Grid col={2}>
                    {Array.from({length: 2}).map((row, index) => {
                        return <CourseCard key={`card_${index}`}/>;
                    })}
                </Grid>
            </Container>
        </div>


        <div className="overflow-x-auto overflow-x-xl-initial mx-auto">
            <Container>
                <Grid col={5} className="mb-8">
                    {Array.from({length: 5}).map((row, index) => {
                        return <PreviewCard key={`preview_${index}`}/>;
                    })}
                </Grid>
            </Container>
        </div>

        <Container>
            <Flex className="justify-content-center">
                <CourseButton isOutline href="/">
                    <img src="/static/examples/design_code/images/icons/courses.svg" alt="cc"/>
                    <span>Browse courses</span>
                </CourseButton>
            </Flex>
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

const CourseSectionRoot = styled.div`
`;
