import styled from 'styled-components';
import MyLink from '../CourseSection/_components/MyLink';
import PreviewCard from '../CourseSection/_components/PreviewCard';
import React from 'react';
import {Col, Flex, Grid, GridCol, GridRow, media, Row} from 'bear-react-grid';

interface IProps extends FCProps {

}

const CourseCard = ({
    className,
}: IProps) => {
    return <CourseCardRoot className={className}>

        <CurriculumWrapper className="d-flex flex-column h-100 overflow-hidden">
            <CourseDetailCardTitle>FEATURED COURSE</CourseDetailCardTitle>
            <MyLinkList className="filter-mask-b">
                {Array.from({length: 5}).map((row, index) => {
                    return <MyLink key={`link_${index}`} no={index+1}/>;
                })}
            </MyLinkList>
        </CurriculumWrapper>

        <div className="flex-grow-0">
            <PreviewCard/>
        </div>

    </CourseCardRoot>;
};

export default CourseCard;




const MyLinkList = styled.div`
  height: 100%;
  overflow: auto;
`;



const CourseDetailCardTitle = styled.p`
  font-size: 13px;
  font-weight: 600;

`;

const CurriculumWrapper = styled.div`

    width: 287px;

    ${media.md`
         width: auto;
    `}
`;


const CourseCardRoot = styled.div`
    display: flex;
    position: relative;
    height: 400px;
    padding: 20px;
    border-radius: 20px;
    gap: 20px;

    background: rgba(15, 14, 71, 0.3);
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 0.5px inset;

`;
