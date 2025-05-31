import type {Meta, StoryObj} from '@storybook/react';

import AutoOverflowAndFlexHeight from './AutoOverflowAndFlexHeight';
import React from 'react';

const meta = {
    title: 'Tests/AutoOverflowAndFlexHeight',
    component: AutoOverflowAndFlexHeight,
    parameters: {
        // layout: 'centered',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof AutoOverflowAndFlexHeight>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
