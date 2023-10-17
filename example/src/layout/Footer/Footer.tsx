import {Container, Grid} from 'bear-react-grid';
import styled from 'styled-components';
import CourseButton from '@/layout/_components/CourseButton';
import React from 'react';

interface IProps extends FCProps {

}

const Footer = ({
    className,
}: IProps) => {
    const nav = [
        {text: 'Docs', path: '/docs/why'},
        {text: 'Features', path: '/docs/category/feature'},
        {text: 'Examples', path: '/docs/category/examples'},
        {text: 'Props Try', path: '/docs/props-try'},
        {text: 'Blog', path: '/docs/blog'},
    ];

    return <FooterRoot className={className}>
        <Grid columns={{
            xs: 1,
            md: 2,
        }}
        className="justify-content-center">
            <Grid columns={{xs: 2, md: 1}} className="justify-items-start" gap="10px">
                {nav.map(row => {
                    return <CourseButton key={`nav_${row.text}`}>
                        <img src="https://designcode.io/images/icons/courses.svg" alt="cc"/>
                        <Caption>{row.text}</Caption>
                    </CourseButton>;
                })}
            </Grid>

            <Info columns={1} className="align-content-center text-center text-md-left">
                <p>Site made with React, BearReactGrid and Styled-components. Learn how.</p>

                <p>Design+Code © 2023</p>

                <p>Terms of Service - Privacy Policy</p>
                <p>Need help? Contact Us</p>
            </Info>

        </Grid>
    </FooterRoot>;
};

export default Footer;


const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
`;

const Info = styled(Grid)`
    max-width: 250px;
`;



const FooterRoot = styled(Container)`
`;
