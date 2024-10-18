import type {Meta, StoryObj} from '@storybook/react';

import {Container} from '@acrool/react-grid';
import React from 'react';

const meta = {
    title: 'Primary/Container',
    component: Container,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Img animation use transform'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        style: {
            background: '#bdbdbd',
            width: '100px',
            height: '100px'
        }
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};

export const With: Story = {
    args: {},
    render: function Render(args) {
        return <Container className="gap-2 overflow-auto ml-8" style={{width: '100%'}}>

        </Container>;
    },
};
