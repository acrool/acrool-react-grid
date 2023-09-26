import styled from 'styled-components';
import CourseButton from '@/layout/_components/CourseButton';
import { Grid } from 'bear-react-grid';
import cx from 'classnames';

interface IProps extends FCProps {
}

const Info = ({
    className,
}: IProps) => {
    return <InfoRoot className={cx(className, 'justify-items-start')} columns={1}>
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
            Create account
        </CourseButton>
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

const InfoRoot = styled(Grid)`

`;
