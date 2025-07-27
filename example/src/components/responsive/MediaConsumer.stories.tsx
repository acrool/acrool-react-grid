import {GridThemeProvider, MediaConsumer} from '@acrool/react-grid';
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
    decorators:  (Story) => (
        <GridThemeProvider>
            <Story />
        </GridThemeProvider>
    ),
    args: {},
} satisfies Meta<typeof MediaConsumer>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Media: Story = {
    args: {},
    render: function Render(args) {
        return <MediaConsumer>
            {eq => {
                if(eq('xxl')){
                    return <div className="bg-color-8 font-color-1">
                        XXL
                    </div>;
                }
                if(eq('xl')){
                    return <div className="bg-color-7  font-color-1">
                        XL
                    </div>;
                }
                if(eq('lg')){
                    return <div className="bg-color-6 font-color-1">
                        LG
                    </div>;
                }
                if(eq('md')){
                    return <div className="bg-color-5">
                        MD
                    </div>;
                }

                if(eq('sm')){
                    return <div className="bg-color-4">
                        SM
                    </div>;
                }




                return <div className="bg-color-2">
                    XS
                </div>;
            }}
        </MediaConsumer>;
    },
};
