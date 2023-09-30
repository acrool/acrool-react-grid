import styled from 'styled-components';
import {Grid} from 'bear-react-grid';

interface IProps extends FCProps {

}

const AppDownload = ({
    className,
}: IProps) => {
    return <AppDownloadRoot className="justify-items-center" columns={1}>
        <SubTitle>
            NEW RELEASE
        </SubTitle>
        <Title>
            Available on iPhone and iPad
        </Title>
        <Desc>
            Our iOS app has been 100% developed with SwiftUI. If you have an M1 Mac, you can even use it as a desktop app.
        </Desc>

        <AppleStoreButton href="/">
            <img className="w-100" src="https://designcode.io/images/components/iosapp/appStore.svg" alt="appStore"/>
        </AppleStoreButton>

    </AppDownloadRoot>;
};

export default AppDownload;



const AppleStoreButton = styled.a`
    width: 231.2px;
    height: 80px;
    backdrop-filter: blur(51.6px);
    border-radius: 12px;
`;

const Desc = styled.p`
    font-weight: 600;
    font-size: 15px;
`;

const SubTitle = styled.p`
    font-size: 17px;
`;

const Title = styled.h2`
    font-weight: bold;
    font-size: 40px;
`;



const AppDownloadRoot = styled(Grid)`
    margin: auto;
    max-width: 300px;
    text-align: center;
    height: 500px;
`;
