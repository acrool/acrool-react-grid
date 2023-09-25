import styled from 'styled-components';
import React from 'react';
import {Container, Grid, GridCol, media} from 'bear-react-grid';
import CourseButton from '@/layout/_components/CourseButton';
import TutorialCard from '@/layout/TutorialSection/_components/TutorialCard';

interface IProps extends FCProps {
    className?: string;
}

const TutorialSection = ({
    className,
}: IProps) => {


    return <TutorialSectionRoot className={className} sm xl={false}>
        <Grid className="justify-content-between">
            <Info columns={1} className="justify-items-start">
                <SubTitle>
                    PREMIUM TUTORIALS
                </SubTitle>
                <Title>
                    Tutorials to guide you beyond
                </Title>
                <Desc>
                    Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge
                </Desc>

                <CourseButton href="/" isOutline>
                    <img src="https://designcode.io/images/icons/tutorials.svg" alt="more"/>
                    <span>More tutorials</span>
                </CourseButton>
            </Info>

            <Grid gap="60px">
                {Array.from({length: 2}).map((row, index) => {
                    return <>
                        <TutorialCard key={`tutorial_${index}`}/>
                    </>;
                })}
            </Grid>



        </Grid>
    </TutorialSectionRoot>;
};

export default TutorialSection;


const Desc = styled.p`
    font-size: 17px;
    line-height: 130%;
`;

const Title = styled.h2`
    font-weight: bold;
    font-size: 40px;
`;

const SubTitle = styled.div`

`;



const Info = styled(Grid)`
    width: 360px;
`;

const TutorialSectionRoot = styled(Container)`

`;
