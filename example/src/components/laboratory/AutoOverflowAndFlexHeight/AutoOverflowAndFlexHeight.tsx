import styled, {createGlobalStyle} from 'styled-components';

interface IProps {
    children?: React.ReactNode
    isOverflowScroll?: boolean
}

const AutoOverflowAndFlexHeight = ({
    children,
    isOverflowScroll,
}: IProps) => {

    return <Root>
        <Navbar>Auto Overflow and Flex Height</Navbar>
        <Content
            $isOverflowScroll={isOverflowScroll}
            dangerouslySetInnerHTML={{__html: children as string}}/>
        <Footer>Copyright © 2025. All rights reserved.</Footer>

        <GlobalCSS/>
    </Root>;
};

export default AutoOverflowAndFlexHeight;














const Content = styled.div<{
    $isOverflowScroll?: boolean,
}>`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;

    ${props => props.$isOverflowScroll && `
        overflow-y: auto;
        height: 0;
    `}
`;


const Footer = styled.div`
    background-color: #4c4949;
    width: 100%;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    padding: 10px;
`;


const Navbar = styled.div`
    background-color: #6e6e6e;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    padding: 10px;

    position: sticky;
    top: 0;
`;


const Root = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const GlobalCSS = createGlobalStyle`
    html, body, #storybook-root {
        height: 100%;
    }

    body {
        background: #9e9e9e;
        color: #000;
    }
`;
