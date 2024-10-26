import type {Meta, StoryObj} from '@storybook/react';

import DesignCode from './DesignCode';
import React from 'react';

const meta = {
    title: 'Examples/DesignCode',
    component: DesignCode,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof DesignCode>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
