import styled from 'styled-components';
import {Grid, Container, GridCol, Flex} from 'bear-react-grid';
import TrustedCard from '@/layout/Trusred/_components/TrustedCard';
import CourseButton from '@/layout/_components/CourseButton';

interface IProps extends FCProps {

}

const Trusted = ({
    className,
}: IProps) => {
    return <TrustedRoot className={className}>
        <Grid gap="60px"
            columns={{xs: 1, xl: 2}}
            className="align-items-start justify-items-center justify-content-xl-between"
        >

            <FeatureList columnsGap="60px"
                columns={{xs: 1, lg: 2}}
                className="order-1 order-xl-0"
            >
                {Array.from({length: 2}).map((row, index) => {
                    return <TrustedCard key={`trusted_${index}`}/>;
                })}
            </FeatureList>

            <Info columns={1} className="justify-items-center justify-items-xl-start text-center text-xl-left">
                <SubTitle>TRUSTED BY TEAMS</SubTitle>
                <Title>110,000 people</Title>
                <Desc>Many startups look for designers who code and developers who design. They use our courses to help train new hires and expand skill sets.</Desc>

                {/*<Grid columns={1} className="w-100">*/}
                {/*    <Flex className="justify-content-between">*/}
                {/*        <div>*/}
                {/*            sadsd*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            asdasd*/}
                {/*        </div>*/}
                {/*    </Flex>*/}
                {/*<GridCol col={1}>test2</GridCol>*/}
                {/*<GridCol col={1}>test3</GridCol>*/}
                {/*<GridCol col={1}>test4</GridCol>*/}
                {/*<GridCol col={1}>test5</GridCol>*/}
                {/*<GridCol col={1}>test6</GridCol>*/}
                {/*</Grid>*/}
                <CourseButton isOutline>
                    <img src="https://designcode.io/images/icons/chat.svg" alt="Create account"/>
                    <span>More stories</span>
                </CourseButton>
            </Info>

        </Grid>
    </TrustedRoot>;
};

export default Trusted;




const FeatureList = styled(Grid)`

`;

const Desc = styled.p`
    font-size: 17px;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 40px;
`;

const SubTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
`;


const Info = styled(Grid)`
    max-width: 420px;
`;



const TrustedRoot = styled(Container)`
    margin-bottom: 50px;
`;
