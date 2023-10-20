import {Container, Grid} from 'bear-react-grid';
import styled from 'styled-components';
import FeatureCard from './_components/FeatureCard';

interface IProps extends FCProps {

}

const Discounts = ({
    className,
}: IProps) => {
    return <DiscountsRoot className={className}>
        <Grid columns={{xs: 1, lg: 2}}
            className="align-items-start justify-items-center justify-content-lg-between"
        >
            <Info columns={1} className="justify-items-center justify-items-lg-start text-center text-xl-left">
                <SubTitle>START WITH MORE</SubTitle>
                <Title>Get discounts</Title>
                <Desc>We’ve partnered with the biggest design tools on the market to help you get started.</Desc>
            </Info>

            <FeatureList columns={{xs: 2, lg: 4}}>
                {Array.from({length: 4}).map((row, index) => {
                    return <FeatureCard key={`feature_${index}`}/>;
                })}
            </FeatureList>
        </Grid>
    </DiscountsRoot>;
};

export default Discounts;



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



const DiscountsRoot = styled(Container)`
    margin-bottom: 200px;
`;
