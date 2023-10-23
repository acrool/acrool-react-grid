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

    const renderList = () => {
        return <CurriculumWrapper className="d-flex flex-column h-100 overflow-hidden gap-2">
            <CourseDetailCardTitle>FEATURED COURSE</CourseDetailCardTitle>
            <MyLinkList className="filter-mask-b">
                {Array.from({length: 5}).map((row, index) => {
                    return <MyLink key={`link_${index}`} no={index+1}/>;
                })}
            </MyLinkList>
        </CurriculumWrapper>;
    };

    return <CourseCardRoot
        columns={{
            xs: '287px 200px',
            xl: 'auto 200px'
        }}
        className={className}>

        {renderList()}

        <PreviewCard/>

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

`;


const CourseCardRoot = styled(Grid)`
    position: relative;
    height: 400px;
    padding: 20px;
    border-radius: 20px;
    gap: 20px;
    width: 586px;

    background: rgba(15, 14, 71, 0.3);
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 0.5px inset;

    ${media.xl`
        width: auto;
    `}
`;
