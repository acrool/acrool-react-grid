import {Col, Container,GridThemeProvider,Row} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const meta = {
    title: 'Components/Container',
    component: Container,
    parameters: {
        docs: {
            description: {
                component: '同 Bootstrap 中的容器 Container'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        fluid: false,
    },
    decorators:  (Story) => (
        <GridThemeProvider>
            <Story />
        </GridThemeProvider>
    ),
    render: function Render(args) {

        const length = 4;

        return <Container
            style={{background: '#2c2c2c'}}
            {...args}
        >
            <Row style={{background: '#6a6a6a'}} className="gy-3">
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

} satisfies Meta<typeof Container>;

export default meta;


type Story = StoryObj<typeof meta>;



export const Primary: Story = {};

export const WithFullPage: Story = {
    args: {
        fluid: true,
    },
};

export const WithOneSizeSpacer: Story = {
    decorators:  (Story) => (
        <GridThemeProvider gridTheme={{
            spacer: '20px',
        }}>
            <Story />
        </GridThemeProvider>
    ),
    args: {
        fluid: false,
    },
};

export const WithSpacerBreakpoints: Story = {
    decorators:  (Story) => (
        <GridThemeProvider gridTheme={{
            // spacer: '20px',
            spacer: {
                xs: '40px',
                lg: '80px',
            },
        }}>
            <Story />
        </GridThemeProvider>
    ),
    args: {
        fluid: false,
    },
};


export const WithContainerMargin: Story = {
    decorators:  (Story) => (
        <GridThemeProvider gridTheme={{
            containerMargin: '20px',
        }}>
            <Story />
        </GridThemeProvider>
    ),
    args: {
        fluid: true,
    },
};


export const WithContainerMarginBreakpoints: Story = {
    decorators:  (Story) => (
        <GridThemeProvider gridTheme={{
            containerMargin: {
                xs: '40px',
                lg: '80px',
            },
        }}>
            <Story />
        </GridThemeProvider>
    ),
    args: {
        fluid: true,
    },
};




const Box = styled.div`
    background: #8caf5d;
    padding: 10px;
    color: #fff;
`;
