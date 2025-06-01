import {Col, Container, FCProps, Grid} from '@acrool/react-grid';
import styled from 'styled-components';

import Book, {IData} from './_components/Book';
import Info from './_components/Info';
import Pay from './_components/Pay';

interface IProps extends FCProps {
    className?: string
}

const Price = ({
    className,
}: IProps) => {
    const books: IData[] = [
        {
            title: 'Free',
            subTitle: 'BASIC',
            desc: 'Trial',
            features: [
                'Free <span>courses</span>',
                '5 Premium <span>Videos</span>',
                'Notify me, <span>Favorite</span>',
            ],
            button: {
                icon: '/static/examples/design_code/images/icons/pen-transparent.svg',
                text: 'Sign Up'
            },
        },
        {
            title: '$ 10',
            subTitle: 'PRO',
            desc: 'per month, billed annually',
            features: [
                'All courses <span>and videos</span>',
                'Source files, <span>ePub</span>',
                'Certificates, <span>Tests</span>',
                'Premium, <span>tutorials</span>',
                'UI, <span>icons, illustrations</span>',
                'Commercial, <span>use</span>',
            ],
            button: {
                icon: '/static/examples/design_code/images/icons/credit-transparent.svg',
                text: 'Subscribe'
            },
        },
        {
            title: '$ 15',
            subTitle: 'TEAM',
            desc: 'per member, per month, billed annually',
            features: [
                '5 users',
                'Manage, <span>subscriptions</span>',
                'Team, <span>progress</span>',
            ],
            button: {
                icon: '/static/examples/design_code/images/icons/credit-transparent.svg',
                text: 'Subscribe'
            },
        }
    ];

    return <ProfileRoot className={className}>
        <Container>
            <Col col={8} className="mx-auto">
                <Info/>
            </Col>
        </Container>

        <Container fluid="xxl" className="mb-9">
            <Grid col={1} md={3}>
                {books.map((row, index) => {
                    return <Book key={`price_${index}`} data={row}/>;
                })}
            </Grid>
        </Container>

        <Container>
            <Col col={4} className="mx-auto">
                <Pay/>
            </Col>
        </Container>
    </ProfileRoot>;
};

export default Price;


const ProfileRoot = styled.div`
    margin-bottom: 300px;
`;
