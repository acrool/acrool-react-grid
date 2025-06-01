import {Col, Container,Grid,Row} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const meta = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
        docs: {
            description: {
                component: '同 Bootstrap 中的網格 Grid'
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

        const length = 10;

        return <Container style={{background: '#65833e'}}>
            <Grid style={{background: '#6a6a6a'}} className="gy-3"
                {...args}
            >
                {Array.from({length}).map((_, idx) => (
                    <Box
                        key={idx}
                        style={{background: '#bdbdbd'}}
                    >
                            Col {String(idx)}
                    </Box>
                ))}
            </Grid>
        </Container>;
    },

} satisfies Meta<typeof Grid>;

export default meta;


type Story = StoryObj<typeof meta>;



export const Primary: Story = {};




const Box = styled.div`
    background: #8caf5d;
    padding: 10px;
    color: #fff;
`;
