import styled from 'styled-components';
import CourseButton from '../../_components/CourseButton';
import {Grid, Container} from 'bear-react-grid';

interface IProps extends FCProps {
}

const Info = ({
    className,
}: IProps) => {

    return <InfoRoot>
        <Grid columns={1} className="justify-items-center justify-items-xl-start text-center text-xl-left">
            <SubTitle>CREATE A PROFILE</SubTitle>
            <Title>Get certificates</Title>
            <Desc>After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.</Desc>

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

const InfoRoot = styled.div`
`;
