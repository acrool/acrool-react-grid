import {Col, Container,Row} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const meta = {
    title: 'Primary/Col',
    component: Col,
    parameters: {
        docs: {
            description: {
                component: '同 Bootstrap 中的網格 Col'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        col: 4,
        sm: 5,
        md: 6,
        lg: 6,
        xl: 4,
        xxl: 4,

    },
    render: function Render(args) {

        const length = 3;

        return <Container style={{background: '#2c2c2c'}}>
            <Row style={{background: '#6a6a6a'}} className="gy-3">
                {Array.from({length}).map((_, idx) => (
                    <Col
                        key={idx}
                        {...args}
                        style={{background: '#bdbdbd'}}
                    >
                        <Box>
                            Col {String(idx)}
                        </Box>
                    </Col>
                ))}
            </Row>
        </Container>;
    },

} satisfies Meta<typeof Col>;

export default meta;


type Story = StoryObj<typeof meta>;



export const Primary: Story = {};

export const WithFill: Story = {
    args: {
        col: true,
    },
};




const Box = styled.div`
    background: #8caf5d;
    padding: 10px;
    color: #fff;
`;
