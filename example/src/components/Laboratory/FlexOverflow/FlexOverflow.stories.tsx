import type {Meta, StoryObj} from '@storybook/react';

import FlexOverflow from './FlexOverflow';
import React from 'react';

const meta = {
    title: 'Laboratory/FlexOverflow',
    component: FlexOverflow,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof FlexOverflow>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
