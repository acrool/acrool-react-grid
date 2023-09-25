import styled from 'styled-components';
import {Grid, Container, media} from 'bear-react-grid';
import React from 'react';

interface IProps extends FCProps {
   className?: string
}

const Navbar = ({
    className,
}: IProps) => {
    const nav = [
        {text: 'Docs', path: '/docs/why'},
        {text: 'Features', path: '/docs/category/feature'},
        {text: 'Examples', path: '/docs/category/examples'},
        {text: 'Props Try', path: '/docs/props-try'},
        {text: 'Blog', path: '/docs/blog'},
    ];

    return <NavbarRoot className={className}>
        <a href="/">
            <Logo src="https://designcode.io/images/logos/logo.svg" alt="logo"/>
        </a>

        <Grid>
            {nav.map(row => {
                return <NavigatorButton href={row.path} key={row.path}>
                    <img src="https://designcode.io/images/icons/courses.svg" alt="cc"/>
                    <Caption>{row.text}</Caption>
                </NavigatorButton>;
            })}
        </Grid>

    </NavbarRoot>;

};

export default Navbar;






const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.7);
`;

const NavigatorButton = styled.a`
    border-radius: 14px;
    padding: 10px 20px;
    transition: all 0.3s ease-in-out 0s;
    display: none;

    :nth-child(1), :nth-child(2){
        display: flex;
    }

    :hover {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: rgba(31, 47, 71, 0.25) 0 20px 40px, rgba(0, 0, 0, 0.1) 0 1px 5px, rgba(255, 255, 255, 0.4) 0 0 0 0.5px inset;
    }

    ${media.lg`
        display: flex;
    `}
`;


const Logo = styled.img`
  width: 44px;
  height: 44px;
`;


const NavbarRoot = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
