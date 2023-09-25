import styled from 'styled-components';
import {Grid, Container, media} from 'bear-react-grid';
import React from 'react';
import CourseButton from '@/layout/_components/CourseButton';

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

const NavigatorButton = styled(CourseButton)`

    :nth-child(1), :nth-child(2){
        display: flex;
    }

`;


const Logo = styled.img`
  width: 44px;
  height: 44px;
`;


const NavbarRoot = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
