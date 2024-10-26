import type {Meta, StoryObj} from '@storybook/react';

import Heroes from './Heroes';
import React from 'react';

const meta = {
    title: 'Examples/Heroes',
    component: Heroes,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Heroes>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
