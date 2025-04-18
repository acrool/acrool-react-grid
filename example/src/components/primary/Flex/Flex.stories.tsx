import type {Meta, StoryObj} from '@storybook/react';

import {Flex} from '@acrool/react-grid';
import React from 'react';

const meta = {
    title: 'Primary/Flex',
    component: Flex,
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
            width: '200px',
            height: '100px'
        }
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};

export const With: Story = {
    args: {
        column: true
    },
    render: function Render(args) {
        return <Flex
            {...args}
            className="gap-2 overflow-auto ml-8" style={{width: '100%', height: '20px', background: 'red'}}>

        </Flex>;
    },
};
