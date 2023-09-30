import {Container, Grid} from 'bear-react-grid';
import styled from 'styled-components';
import FeatureCard from '@/layout/Discounts/_components/FeatureCard';

interface IProps extends FCProps {

}

const Discounts = ({
    className,
}: IProps) => {
    return <DiscountsRoot className={className}>
        <Grid columns={{
            xs: 1,
            lg: 2,
        }}
        className="justify-content-center justify-content-md-between"
        >
            <Info columns={1} className="align-self-start">
                <SubTitle>START WITH MORE</SubTitle>
                <Title>Get discounts</Title>
                <Desc>We’ve partnered with the biggest design tools on the market to help you get started.</Desc>
            </Info>

            <FeatureList columns={{
                xs: 2,
                lg: 4,
            }}>
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

const Desc = styled.div`
    font-size: 17px;
    color: rgba(255, 255, 255, 0.7);
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
    width: 360px;
`;



const DiscountsRoot = styled(Container)`
    height: 500px;
`;
