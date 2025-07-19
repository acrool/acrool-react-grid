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
                                        src={testImageUrl}
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

export const FilterMaskWithContent: Story = {
    args: {},
    render: function Render(args: any) {
        return (
            <Container {...args}>
                <Flex column className="gap-4">
                    <h2 className="text-center">Filter Mask 內容測試</h2>

                    <Row className="gap-4">
                        {maskDirections.map(direction => {
                            const className = `filter-mask-${direction}`;

                            return (
                                <Col key={direction} col={6} md={4}>
                                    <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                        <img
                                            src={testImageUrl}
                                            alt={`Test image with ${className}`}
                                            className={`w-100 ${className}`}
                                            style={{height: '150px', objectFit: 'cover'}}
                                        />
                                        <div className="absolute-center text-center text-white">
                                            <h4>Mask {direction.toUpperCase()}</h4>
                                            <p className="text-sm">filter-mask-{direction}</p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Flex>
            </Container>
        );
    },
};

export const FilterMaskBottom80: Story = {
    args: {},
    render: function Render(args: any) {
        return (
            <Container {...args}>
                <Flex column className="gap-4">
                    <h2 className="text-center">Filter Mask Bottom 80% 測試</h2>

                    <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                        <img
                            src={testImageUrl}
                            alt="Test image with filter-mask-b-80"
                            className="w-100 filter-mask-b-80"
                            style={{height: '300px', objectFit: 'cover'}}
                        />
                        <div className="absolute-center text-center text-white">
                            <h3>filter-mask-b-80</h3>
                            <p>底部 80% 遮罩效果</p>
                        </div>
                    </div>
                </Flex>
            </Container>
        );
    },
};

export const FilterMaskComparison: Story = {
    args: {},
    render: function Render(args: any) {
        return (
            <Container {...args}>
                <Flex column className="gap-4">
                    <h2 className="text-center">Filter Mask 對比測試</h2>

                    <Row className="gap-4">
                        <Col col={6}>
                            <h3 className="text-center mb-2">原始圖片</h3>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Original test image"
                                    className="w-100"
                                    style={{height: '250px', objectFit: 'cover'}}
                                />
                            </div>
                        </Col>

                        <Col col={6}>
                            <h3 className="text-center mb-2">遮罩效果</h3>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Test image with filter-mask-t"
                                    className="w-100 filter-mask-t"
                                    style={{height: '250px', objectFit: 'cover'}}
                                />
                                <div className="absolute-center text-center text-white">
                                    <h4>filter-mask-t</h4>
                                    <p className="text-sm">頂部遮罩</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gap-4 mt-4">
                        <Col col={4}>
                            <h4 className="text-center mb-2">左側遮罩</h4>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Test image with filter-mask-l"
                                    className="w-100 filter-mask-l"
                                    style={{height: '200px', objectFit: 'cover'}}
                                />
                            </div>
                        </Col>

                        <Col col={4}>
                            <h4 className="text-center mb-2">右側遮罩</h4>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Test image with filter-mask-r"
                                    className="w-100 filter-mask-r"
                                    style={{height: '200px', objectFit: 'cover'}}
                                />
                            </div>
                        </Col>

                        <Col col={4}>
                            <h4 className="text-center mb-2">底部遮罩</h4>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Test image with filter-mask-b"
                                    className="w-100 filter-mask-b"
                                    style={{height: '200px', objectFit: 'cover'}}
                                />
                            </div>
                        </Col>
                    </Row>
                </Flex>
            </Container>
        );
    },
};

export const FilterMaskInteractive: Story = {
    args: {},
    render: function Render(args: any) {
        return (
            <Container {...args}>
                <Flex column className="gap-4">
                    <h2 className="text-center">Filter Mask 互動測試</h2>

                    <Row className="gap-4">
                        <Col col={12} md={6}>
                            <h3 className="text-center mb-2">水平遮罩 (X軸)</h3>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Test image with filter-mask-x"
                                    className="w-100 filter-mask-x"
                                    style={{height: '250px', objectFit: 'cover'}}
                                />
                                <div className="absolute-center text-center text-white">
                                    <h4>filter-mask-x</h4>
                                    <p className="text-sm">左右兩側遮罩</p>
                                </div>
                            </div>
                        </Col>

                        <Col col={12} md={6}>
                            <h3 className="text-center mb-2">垂直遮罩 (Y軸)</h3>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Test image with filter-mask-y"
                                    className="w-100 filter-mask-y"
                                    style={{height: '250px', objectFit: 'cover'}}
                                />
                                <div className="absolute-center text-center text-white">
                                    <h4>filter-mask-y</h4>
                                    <p className="text-sm">上下兩側遮罩</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gap-4 mt-4">
                        <Col col={12}>
                            <h3 className="text-center mb-2">特殊遮罩效果</h3>
                            <div className="relative overflow-hidden rounded" style={{backgroundColor: '#f8f9fa'}}>
                                <img
                                    src={testImageUrl}
                                    alt="Test image with filter-mask-b-80"
                                    className="w-100 filter-mask-b-80"
                                    style={{height: '300px', objectFit: 'cover'}}
                                />
                                <div className="absolute-center text-center text-white">
                                    <h4>filter-mask-b-80</h4>
                                    <p className="text-sm">底部 80% 漸變遮罩</p>
                                    <p className="text-sm">從底部開始漸變到透明</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Flex>
            </Container>
        );
    },
};

