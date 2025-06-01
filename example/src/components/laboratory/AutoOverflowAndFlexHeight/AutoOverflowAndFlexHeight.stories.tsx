import type {Meta, StoryObj} from '@storybook/react';

import AutoOverflowAndFlexHeight from './AutoOverflowAndFlexHeight';
import React from 'react';
import {html} from "./data";

const meta = {
    title: 'Laboratory/AutoOverflowAndFlexHeight',
    component: AutoOverflowAndFlexHeight,
    parameters: {
        docs: {
            description: {
                component: '中間空間高度撐滿，Footer置底佈局，當內容超出，則自動撐開'
            },
        },
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof AutoOverflowAndFlexHeight>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};

export const WithOverflow: Story = {
    args: {
        children: html,
    }
};

export const WithOverflowScroll: Story = {
    args: {
        children: html,
        isOverflowScroll: true,
    }
};
