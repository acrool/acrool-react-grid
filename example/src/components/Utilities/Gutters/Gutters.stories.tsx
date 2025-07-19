import {GridThemeProvider, Col, Container, Flex, Row} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const meta = {
    title: 'Utilities/Gutters',
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


const sizes = Array.from({length: 18}).map((row,idx) => idx);

export const DefaultInContainer: Story = {
    args: {},
    render: function Render(args) {
        return <Flex column className="gap-2">
            <div className="bg-color-2">
                <Container
                    {...args}
                >
                    <Row>
                        <Col col>Logo</Col>
                        <Col col>Menu list</Col>
                    </Row>
                </Container>
            </div>

            {sizes.map(size => {
                const classNames = `g-${size}`;

                return <div className="bg-color-5">
                    <Container
                        {...args}
                        className={classNames}
                    >
                        <Row>
                            <Col col>Logo {classNames}</Col>
                            <Col col>Menu list</Col>
                        </Row>
                    </Container>
                </div>;
            })}

        </Flex>;
    },
};


export const MediaInContainer: Story = {
    args: {},
    render: function Render(args) {
        return <Flex column className="gap-2">
            <div className="bg-color-2">
                <Container
                    {...args}
                    className="g-0 g-sm-1"
                >
                    <Row>
                        <Col col>Logo (g-0 g-sm-1)</Col>
                        <Col col>Menu list</Col>
                    </Row>
                </Container>
            </div>
        </Flex>;
    },
};


export const DefaultInRow: Story = {
    args: {},
    render: function Render(args) {
        return <Flex column className="gap-2">
            <div className="bg-color-2">
                <Container
                    {...args}
                >
                    <Row>
                        <Col col>Logo</Col>
                        <Col col>Menu list</Col>
                    </Row>
                </Container>
            </div>

            {sizes.map(size => {
                const classNames = `g-${size}`;

                return <div className="bg-color-5">
                    <Container
                        {...args}
                    >
                        <Row className={classNames}>
                            <Col col={2}>Logo {classNames}</Col>
                            <Col col="auto">Menu item</Col>
                            <Col col="auto">Menu item</Col>
                            <Col col="auto">Menu item</Col>
                            <Col col="auto">Menu item</Col>
                            <Col col="auto">Menu item</Col>
                        </Row>
                    </Container>
                </div>;
            })}

        </Flex>;
    },
};


export const MediaInRow: Story = {
    args: {},
    render: function Render(args) {
        return <Flex column className="gap-2">
            <div className="bg-color-2">
                <Container
                    {...args}
                >
                    <Row className="g-0 g-sm-1">
                        <Col col={2}>Logo (g-0 g-sm-1)</Col>
                        <Col col="auto">Menu item</Col>
                        <Col col="auto">Menu item</Col>
                        <Col col="auto">Menu item</Col>
                        <Col col="auto">Menu item</Col>
                        <Col col="auto">Menu item</Col>
                    </Row>
                </Container>
            </div>
        </Flex>;
    },
};
