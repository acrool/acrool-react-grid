import type {Meta, StoryObj} from '@storybook/react';

import Features from './Features';
import React from 'react';

const meta = {
    title: 'Examples/Features',
    component: Features,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
