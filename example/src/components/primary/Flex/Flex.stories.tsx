import {Flex} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const meta = {
    title: 'Components/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '方便使用的 Flexbox'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
    },
    render: function Render(args) {
        return <Flex
            {...args}
        >
            <img src="/static/acrool_logo.svg"
                width={100}
                height={100}
                alt="acrool logo"
            />
            <img src="/static/acrool_logo.svg"
                width={100}
                height={100}
                alt="acrool logo"
            />
        </Flex>;
    },

} satisfies Meta<typeof Flex>;

export default meta;



type Story = StoryObj<typeof meta>;



export const Primary: Story = {};


export const WithFlexDirectColumn: Story = {
    args: {
        column: true,
    },
};



export const WithGap4: Story = {
    args: {
        column: true,
        className: 'gap-4',
    },
};


