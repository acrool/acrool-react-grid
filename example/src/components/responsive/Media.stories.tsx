import {MediaConsumer} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const meta = {
    title: 'Responsive/MediaConsumer',
    parameters: {
        docs: {
            description: {
                component: 'Media Query 觀察者模式，提供特定尺寸JS狀態更新 size'
            },
        },
    },
    tags: ['autodocs'],

    args: {},
} satisfies Meta<typeof MediaConsumer>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Media: Story = {
    args: {},
    render: function Render(args) {
        return <MediaConsumer
            sizes={['sm','md']}
        >
            {size => {
                console.log('size', size);

                if(size === 'md'){
                    return <div className="bg-color-4">
                        MD ({size})
                    </div>;
                }
                if(size === 'sm'){
                    return <div className="bg-color-4">
                        MD ({size})
                    </div>;
                }
                return <div className="bg-color-2">
                    XS ({size})
                </div>;
            }}
        </MediaConsumer>;
    },
};
