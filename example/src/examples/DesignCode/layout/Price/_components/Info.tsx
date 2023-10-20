import styled from 'styled-components';
import {Grid, Container} from 'bear-react-grid';

interface IProps extends FCProps {
}

const Info = ({
    className,
}: IProps) => {

    return <InfoRoot className={className}>
        <Grid columns={1} className="justify-items-center text-center">
            <Title>Ready to start?</Title>
            <Desc>Get access to all our premium courses, tutorials, downloads, certificates and priority support.</Desc>
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

const InfoRoot = styled(Container)`
  max-width: 420px;
    margin-bottom: 40px;
`;
