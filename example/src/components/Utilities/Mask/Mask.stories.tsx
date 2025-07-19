import {Col, Container, Flex, GridThemeProvider, Row} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const meta = {
    title: 'Utilities/Mask',
    parameters: {},
    argTypes: {},
    args: {},
    decorators:  (Story) => (
        <GridThemeProvider>
            <Story />
        </GridThemeProvider>
    ),
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// 測試用的圖片 URL
const testImageUrl = 'https://picsum.photos/400/300';

// 各種 filter-mask 方向
const maskDirections = ['t', 'r', 'b', 'l', 'x', 'y'];

export const FilterMaskDirections: Story = {
    args: {},
    render: function Render(args: any) {
        return (
            <Container {...args}>
                <Flex column className="gap-4">
                    <h2 className="text-center">Filter Mask 方向測試</h2>

                    {maskDirections.map(direction => {
                        const className = `filter-mask-${direction}`;

                        return (
                            <div key={direction} className="mb-4">
                                <h3 className="mb-2">filter-mask-{direction}</h3>
                                <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                    <img
                                        src="/og.png"
                                        alt={`Test image with ${className}`}
                                        className={`w-100 ${className}`}
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Flex>
            </Container>
        );
    },
};
