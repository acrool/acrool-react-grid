import styled, {createGlobalStyle} from 'styled-components';
import Button from '@/components/Button';
import {Col, Container, Grid, Row, auto} from '@acrool/react-grid';

interface IProps extends FCProps {

}

const AutoOverflowAndFlexHeight = ({
    className,
}: IProps) => {

    return <HeroesRoot className={className}>

        <Title>Auto Overflow and Flex Height</Title>

        <Desc1>
            《航海王劇場版：紅髮歌姬》。双喜
            《航海王劇場版：紅髮歌姬》是《航海王》系列的第15部電影版，本片同時也是原作連載25周年紀念作品。故事圍繞在讓魯夫決定踏上航海道路的紅髮傑克身上，包含他不為人知的過去，以及「紅髮傑克女兒」美音的真相。

            基本上，看《航海王劇場版：紅髮歌姬》，你可以把它想像成欣賞一場視覺饗宴非常華麗的演唱會，除了歌聲動聽、劇情精彩，澎湃又絢麗奪目的光影更交織出超乎想像的極致，那是種非常令人陶醉的情感，像是浪漫漩渦般引人入勝。
        </Desc1>

        <Desc2>
        這些日本經典動畫電影擁有最極致的迷人魅力——台灣影史票房最高的10大日本電影，你看了幾部？

        一直以來，動畫電影就不只是小孩子的「卡通」，它是構築許多人夢想、綻放一切企盼的舞台，在全球影史裡，迪士尼、皮克斯的動畫一直都具有改變世界的地位，許多作品都能名留青史，但對動畫大國日本來說，它們的動畫作品更是風靡全球，特別是基於原著漫畫所製作而成的動畫電影，更擁有無數支持者。

        隨著《排球少年！！垃圾場的決戰》在台賣座的好成績，又讓全台日本電影票房又進行了一次大洗牌，你知道，在台灣影史的日本電影票房裡，哪些作品能夠進榜前10名嗎？

        值得一提的是，這份榜單完全由日本動畫電影所包辦，不只見證日本動畫在台灣的受歡迎程度，更代表著日本真人電影在海外有多麼難賣了。


        《天氣之子》。車庫娛樂
        《天氣之子》是日本動畫導演新海誠編劇及執導的動畫電影，這也是新海誠在大受歡迎的《你的名字》後，全新推出的動畫作品。事實上，光是在這份榜單裡，就有3部電影是新海誠的作品，證明他堅強的實力和地位。

        本片同時是新海誠繼《你的名字》後，第二部有關災難主題的動畫電影，與《你的名字》和《鈴芽之旅》合稱「災難三部曲」。

        《天氣之子》描述，高一那年夏天，帆高離開位在離島的家鄉，獨自一人來到東京，拮据的生活迫使他不得不找份工作，最後來到一間專門出版奇怪超自然刊物的出版社擔任寫手。

        不久，東京開始下起連日大雨，彷彿暗示著帆高不順遂的未來，在這座繁忙城市裡到處取材的帆高邂逅了與弟弟相依為命，不可思議的美少女陽菜。原來，陽菜擁有「改變天氣」的奇妙能力……


        </Desc2>
        {/*<FixFlexBox>*/}
        {/*    <Col col={12}>*/}
        {/*        <ScrollWrapper>*/}
        {/*            <OverWrapper>*/}
        {/*            </OverWrapper>*/}
        {/*        </ScrollWrapper>*/}
        {/*    </Col>*/}
        {/*    <Col col={12}>*/}
        {/*        <TestButton>Test</TestButton>*/}
        {/*    </Col>*/}
        {/*</FixFlexBox>*/}


        <GlobalCSS/>
    </HeroesRoot>;
};

export default AutoOverflowAndFlexHeight;


const Desc1 = styled.div`
    background-color: rgba(255, 149, 199, 0.4);
    position: sticky;
    top: 10px;
`;

const Desc2 = styled.div`
    background-color: rgba(149, 174, 255, 0.4);


`;

const Title = styled.div`
    background-color: #2f7749;
    color: #fff;
    position: sticky;
    top: 0;
`;

const FixFlexBox = styled.div`
    //width:0;
    //flex:1;

    min-width: 0;
`;

const TestButton = styled.button`
    background-color: #274c94;
    display: flex;
    color: #fff;
    border-radius: 10px;
    width: 100%;
`;

const ScrollWrapper = styled.div`
    width: 100%;
    background-color: #3ee88d;
    overflow: scroll;
`;

const OverWrapper = styled.div`
    width: 1000px;
    height: 200px;
    background-color: #e83e8c;
`;



const HeroesRoot = styled.div`
    min-width: 0;
    background-color: #9d988a;
    min-height: 100vh;
    font-size: 40px;
`;



const GlobalCSS = createGlobalStyle`
    body {
        background: #cecece;
        color: #000;
    }
`;
