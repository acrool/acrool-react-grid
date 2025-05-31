import {Container, FCProps, Grid, media} from '@acrool/react-grid';
import styled from 'styled-components';

import CourseCard from '../_components/CourseCard';
import Info from './_components/Info';

interface IProps extends FCProps {
    className?: string
}

const Instructors = ({
    className,
}: IProps) => {
    return <InstructorsRoot className={className}>
        <Container>
            <Info/>
        </Container>

        <Container className="overflow-x-auto overflow-x-xl-initial">
            <Grid col={2}>
                {Array.from({length: 2}).map((row, index) => {
                    return <CourseCard
                        key={`certificateCard_${index}`}
                    />;
                })}
            </Grid>
        </Container>

    </InstructorsRoot>;
};

export default Instructors;




const InstructorsRoot = styled.div`
    margin-bottom: 300px;
`;
