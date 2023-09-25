import { Grid } from 'bear-react-grid';
import styled from 'styled-components';

interface IProps extends FCProps {
   className?: string
}

const TutorialCard = ({
    className,
}: IProps) => {
    return <TutorialCardRoot>
        <Card columns={1} className="align-content-start">

            <PlatformLogo src="https://designcode.io/images/logos/swiftui-logo.svg" className="justify-self-end"/>
            <Title>SwiftUI Handbook</Title>
            <Desc className="text-ellipsis">A comprehensive series of tutorials covering Xcode, SwiftUI and all the layout and development techniques</Desc>

            <Item>
                <img src="https://designcode.io/images/icons/file.svg" alt="file icon" />
                107
                free tutorials
            </Item>
        </Card>
        <CardB color="linear-gradient(180deg, #408DD5 0%, #630B8C 100%)"
            className="HandbookCard__SecondBackground-sc-7b5434-3 lcvTnr"/>
    </TutorialCardRoot>;
};

export default TutorialCard;



const PlatformLogo = styled.img`
  width: 44px;
  height: 44px;
  opacity: 1;
    position: absolute;
    top: 20px;
    right: 20px;
`;


const Item = styled.div`

`;


const Desc = styled.p`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.h3`
    font-size: 24px;
    width: 100px;
`;



const Card = styled(Grid)`
    width: 240px;

    position: relative;
    height: 280px;
    backdrop-filter: blur(40px);
    border-radius: 0 30px 40px 40px;
    padding: 20px;
    padding-top: 50px;
    z-index: 1;

    background: rgba(31, 31, 71, 0.6);
    box-shadow: rgba(0, 0, 0, 0.25) 0 40px 80px, rgba(255, 255, 255, 0.15) 0 0 0 0.5px inset;
`;


const CardB = styled.div`
    position: absolute;
    width: 220px;
    height: 280px;
    background: linear-gradient(rgb(64, 141, 213) 0%, rgb(99, 11, 140) 100%);
    border-radius: 0 40px 40px;
    transform: skewY(8deg);
    transform-origin: left top;
    top: 0;
`;

const TutorialCardRoot = styled.div`
    position: relative;
`;
