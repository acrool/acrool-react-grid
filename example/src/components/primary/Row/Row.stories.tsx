import {Col, Container,Row} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const meta = {
    title: 'Components/Row',
    component: Container,
    parameters: {
        docs: {
            description: {
                component: '同 Bootstrap 中的容器 Row'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        className: '',
    },
    render: function Render(args) {

        const length = 4;

        return <Container
            style={{background: '#2c2c2c'}}
        >
            <Row
                {...args}
                style={{background: '#6a6a6a'}}
            >
                {Array.from({length}).map((_, idx) => (
                    <Col
                        key={idx}
                        style={{background: '#bdbdbd'}}
                        col={3}
                    >
                        <Box>
                            Col {String(idx)}
                        </Box>
                    </Col>
                ))}
            </Row>
        </Container>;
    },

} satisfies Meta<typeof Row>;

export default meta;


type Story = StoryObj<typeof meta>;



export const Primary: Story = {};

export const WithNoGutter: Story = {
    args: {
        className: 'g-0',
    },
};

export const WithGutterG4: Story = {
    args: {
        className: 'g-4',
    },
};




const Box = styled.div`
    background: #8caf5d;
    padding: 10px;
    color: #fff;
`;
