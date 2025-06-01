import {Flex} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';


const meta = {
    title: 'Laboratory/ShapeShadow',
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `測試不規則形狀圖片的陰影，Webp、SVG、PNG可支援\n
https://webcode.tools/css-generator/drop-shadow`
            },
        },
    },
    tags: ['autodocs'],
    args: {},

} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;



export const WithFilterDropShadow: Story = {
    args: {},
    render: function Render(args) {
        return <img src="/static/acrool_logo.svg"
            width={200}
            height={200}
            alt="acrool logo"
            style={{
                filter: 'drop-shadow(-13px 5px 10px #000000)'
            }}/>;
    }
};

export const WithBoxShadow: Story = {
    args: {},
    render: function Render(args) {
        return <img src="/static/acrool_logo.svg"
            width={200}
            height={200}
            alt="acrool logo"
            style={{
                boxShadow: '0 0 10px 10px #000000',
            }}/>;
    }
};
