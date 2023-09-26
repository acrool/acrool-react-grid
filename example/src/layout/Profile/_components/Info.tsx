import styled from 'styled-components';
import CourseButton from '@/layout/_components/CourseButton';
import {Grid, Container} from 'bear-react-grid';
import cx from 'classnames';

interface IProps extends FCProps {
}

const Info = ({
    className,
}: IProps) => {
    return <InfoRoot className={className}>
        <Grid className="justify-items-center text-center text-xl-left justify-items-xl-start" columns={1}>
            <SubTitle>
            CREATE A PROFILE
            </SubTitle>
            <Title>
            Get certificates
            </Title>
            <Desc>
            After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.
            </Desc>

            <CourseButton href="/" isOutline>
                <img src="https://designcode.io/images/icons/account.svg" alt="Create account"/>
                <span>Create account</span>
            </CourseButton>
        </Grid>
    </InfoRoot>;
};

export default Info;


const Desc = styled.p`

    font-size: 17px;
`;

const Title = styled.h2`
    font-weight: bold;
    font-size: 40px;
`;
const SubTitle = styled.p`
    font-weight: 600;
    font-size: 15px;
`;

const InfoRoot = styled(Container)`

`;
